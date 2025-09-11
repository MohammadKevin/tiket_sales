import { PrismaClient } from "@prisma/client";
// import jwt from "jsonwebtoken";
// import md5 from "md5";
const prisma = new PrismaClient();

export const getAllSeat = async (req, res) => {
    try {
        const seat = await prisma.seat.findMany();
        res.status(200).json(seat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSeatById = async (req, res) => {
    try {
        const seat = await prisma.seat.findFirst({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(seat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addSeat = async (req, res) => {
    try {
        const { eventID, rowNum, seatNum, status } = req.body;
        const seat = await prisma.seat.create({
            data: {
                eventID,
                rowNum,
                seatNum,
                status,
            },
        });
        res.status(201).json(seat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSeat = async (req, res) => {
try {
    const { eventID, rowNum, seatNum, status } = req.body;

    const seat = await prisma.seat.update({
        where: {
        seatID: Number(req.params.id), // ✅ convert ke Number
        },
        data: {
        eventID: Number(eventID),  // biar aman juga di-convert
        rowNum: Number(rowNum),
        seatNum: Number(seatNum),
        status,
        },
    });

    res.status(200).json(seat);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
    }
};

export const deleteSeat = async (req, res) => {
    try {
        const seat = await prisma.seat.delete({
            where: {
                seatID: Number(req.params.id),
            },
        });
        res.status(200).json(seat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};