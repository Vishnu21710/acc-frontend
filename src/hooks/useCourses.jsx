import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export const useCourses = () => {
  console.log("Inside use Courses");
  const [isLoading, setIsLoading] = useState(false);

  const [courses, setCourses] = useState([
    {
      title: "Full Stack Development",
      id: 1,
    },
    {
      title: "Digital Marketing",
      id: 2,
    },
    {
      title: "Data Science ",
      id: 3,
    },
    {
      title: "Project Management",
      id: 4,
    },
    {
      title: "MERN Stack",
      id: 5,
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
