import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Ambil semua event
export const getAllEvent = async (req, res) => {
  try {
    const event = await prisma.event.findMany();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ambil event by ID
export const getEventById = async (req, res) => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        eventID: Number(req.params.id), // pakai eventID
      },
    });
    res.status(200).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Tambah event
export const addEvent = async (req, res) => {
  try {
    const { eventName, eventDate, venue, price } = req.body;

    const dateObj = new Date(eventDate);
    if (isNaN(dateObj)) {
      return res.status(400).json({ message: "Invalid date format" });
    }

    const event = await prisma.event.create({
      data: {
        eventName,
        eventDate: dateObj,
        venue,
        price: parseFloat(price),
        imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
      },
    });

    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update event

export const updateEvent = async (req, res) => {
  try {
    const { eventName, eventDate, venue, price } = req.body;

    const event = await prisma.event.update({
      where: {
        eventID: Number(req.params.id), // ganti sesuai schema
      },
      data: {
        eventName,
        eventDate: new Date(eventDate),
        venue,
        price: parseFloat(price),
        ...(req.file && { imageUrl: `/uploads/${req.file.filename}` }), // aman
      },
    });

    res.status(200).json(event);
  } catch (error) {
    console.error(error); // biar tau error detail di console
    res.status(500).json({ message: error.message });
  }
};


// Hapus event
export const deleteEvent = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id) || id <= 0) {
      return res.status(400).json({ message: "Invalid event ID" });
    }

    const existingEvent = await prisma.event.findUnique({
      where: { eventID: id },
    });

    if (!existingEvent) {
      return res
        .status(404)
        .json({ message: "Data yang mau anda delete belum terdaftar" });
    }

    await prisma.ticket.deleteMany({
      where: { eventID: id },
    });

    await prisma.seat.deleteMany({
      where: { eventID: id },
    });

    const event = await prisma.event.delete({
      where: { eventID: id },
    });

    res.status(200).json({ message: "Event berhasil dihapus", event });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: error.message });
  }
};

