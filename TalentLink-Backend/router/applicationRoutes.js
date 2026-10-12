import express from "express"
import mongoose from "mongoose"
import Application from "../models/application.js"
import Job from "../models/job.js"

const router = express.Router()

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      resume,
      coverLetter,
      jobId,
    } = req.body

    if (!name || !email || !phone || !resume || !coverLetter || !jobId) {
      return res.status(400).json({
        message: "Please fill in all required fields.",
      })
    }

    if (!mongoose.isValidObjectId(jobId)) {
      return res.status(400).json({
        message: "Invalid job ID.",
      })
    }

    const job = await Job.findById(jobId)

    if (!job) {
      return res.status(404).json({
        message: "Job not found.",
      })
    }

    const application = await Application.create({
      name,
      email,
      phone,
      resume,
      coverLetter,
      jobId,
    })

    return res.status(201).json({
      message: "Application submitted successfully!",
      application,
    })
  } catch (error) {
    console.error("Application error:", error)

    return res.status(500).json({
      message: "Failed to submit application.",
    })
  }
})
router.get("/", async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("jobId", "title company")
      .sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      applications,
    })
  } catch (error) {
    console.error("Fetch applications error:", error)

    res.status(500).json({
      message: "Failed to fetch applications",
    })
  }
})
export default router
