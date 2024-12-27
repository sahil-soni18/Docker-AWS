import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from Docker v3 🎉" });
});

router.get("/health", (req, res) => {
    res.status(200).json({ message: "Everything is good here 👀" });
    throw new Error("Internal Server Error");
  });

export default router;




// 887632647200.dkr.ecr.us-east-1.amazonaws.com/sahil_docker_aws-server:latest