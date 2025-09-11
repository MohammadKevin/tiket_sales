import { PrismaClient } from "@prisma/client";
// import jwt from "jsonwebtoken";
// import md5 from "md5";
const prisma = new PrismaClient();

export const getAllTickets = async (req, res) => {
    try {
        const tickets = await prisma.ticket.findMany();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getTicketById = async (req, res) => {
    try {
        const ticket = await prisma.ticket.findFirst({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addTicket = async (req, res) => {
    try {
        const { userID, eventID, seatID, bookedDate } = req.body;
        const ticket = await prisma.ticket.create({
            data: {
                userID,
                eventID,
                seatID,
                bookedDate,
            },
        });
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTicket = async (req, res) => {
    try {
        const { userID, eventID, seatID, bookedDate } = req.body;
        const ticket = await prisma.ticket.update({
            where: {
                ticketID:Number(req.params.id),
            },
            data: {
                userID,
                eventID,
                seatID,
                bookedDate,
            },
        });
        console.log(ticket);
        res.status(200).json(ticket);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const deleteTicket = async (req, res) => {
    try {
        const ticket = await prisma.ticket.delete({
            where: {
                ticketID: Number(req.params.id),
            },
        });
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};