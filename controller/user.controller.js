import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import md5 from "md5";
const prisma = new PrismaClient();

export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                userID: Number(req.params.id),
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;
        const hashedPassword = md5(password);
        const user = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                password: md5(password),
                role
            },
        });
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await prisma.user.update({
            where: {
                userID: Number(req.params.id),
            },
            data: {
                firstName,
                lastName,
                email,
                password: md5(password),
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                userID: Number(req.params.id),
            },
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};