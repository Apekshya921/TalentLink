import Job from "../models/job.js";
export const postJob=async(req,res)=>{
    const {title,description,company,location,salary, jobType }=req.body
   try{
    const create=await Job.create({title,description,company,location,salary, jobType })
res.status(200).json({message:"Job created sucessfully",job: create})
}
catch(error){
res.status(500).json({message:error.message})
}
}
export const findJob = async (req, res) => {
  try {
    const { id } = req.params

    console.log("Requested job ID:", id)

    const job = await Job.findById(id)

    console.log("Found job:", job)

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      })
    }

    return res.status(200).json({
      success: true,
      job,
    })
  } catch (error) {
    console.error("findJob error:", error.message)

    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}
export const findAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()

    res.status(200).json({
      success: true,
      jobs
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedJob = await Job.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      job: updatedJob
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedJob = await Job.findByIdAndDelete(id);

    if (!deletedJob) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Job deleted successfully",
      job: deletedJob
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
