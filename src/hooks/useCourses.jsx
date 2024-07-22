import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export const useCourses = () => {
  console.log("Inside use Courses");
  const [isLoading, setIsLoading] = useState(false);

  const [courses, setCourses] = useState([
    {
      title: "Data Science",
      id: 1,
    },
    {
      title: "Project Management",
      id: 2,
    },
    {
      title: "Machine Learning",
      id: 3,
    },
    {
      title: "Full Stack",
      id: 4,
    },
    
  ]);
  const [error, setError] = useState();

  const getCourses = async () => {
    setIsLoading(true);
    try {
      const data = (await axios.get(`${API_URL}/courses`)).data;
      setCourses(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return {
    courses,
    isLoading,
    error,
  };
};
