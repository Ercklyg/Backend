import * as StudentModel from "../models/StudentModel.js";

export const fetchStudents = async (req, res) => {
    try {
        const Students = await StudentModel.getStudents();
        res.status(200).json({success: true, message: Students});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false, 
            message: "Internal Server Error"
        })
    }
}

export const insertStudent = async (req, res) => {
    const { name, srcode, course } = req.body;
    try {
        const studentId = await StudentModel.insertStudent(name, srcode, course);
        res.status(201).json({success: true, message: studentId});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const editStudent = async (req, res) => {
    const { name, srcode, course } = req.body;
    const { studentId } = req.params

    try {
        const updatedId = await StudentModel.updateStudent(name, srcode, course, studentId);
        res.status(200).json({success: true, message: updatedId});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}

export const deleteStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const deletedId = await StudentModel.deleteStudent(studentId);
        res.status(200).json({success: true, message: deletedId});
    } catch (e) {
        console.log(e);
        res.status(500).json({success: false, message: "Internal Server Error"})
    }
}