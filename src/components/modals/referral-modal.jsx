import React, { useContext, useState } from "react";
import { ReferalModalContext } from "../../contexts/ReferralModalContext";
import { LoaderCircle, XIcon } from "lucide-react";
import Button from "../button/button";
import FormInput from "../form-input";
import { useCourses } from "../../hooks/useCourses";
import axios from "axios";
import { toast } from "sonner";
import { API_URL } from "../../constants";
import { useAuth } from "../../contexts/AuthContext";

const ReferalModal = () => {
  const { auth } = useAuth();

  const [formState, setFormState] = useState({
    referee_email: "",
    referrer_email: auth && auth.email ,
    referrer_name: "",
    referee_name: "",
    course_id: 1,
  });

  console.log(formState);
  const [fieldErrors, setFieldErrors] = useState();
  const [formLoading, setFormLoading] = useState(false);
  const { isLoading, courses, error } = useCourses();

  const { isOpen, onClose } = useContext(ReferalModalContext);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormState((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const data = await axios.post(
        `${API_URL}/referrals`,
        {
          ...formState,
          referrer_email: auth?.email,
          course_id: parseInt(formState.course_id),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      if (data?.data?.field_errors) {
        setFieldErrors(data.data.field_errors);
        setFormState({
          course_id: 1,
          referee_email: "",
          referrer_email: "",
          referee_name: "",
          referrer_name: "",
        });
        return;
      }
      if (data && !data.data.fieldErrors) {
        onClose();
        toast.success(`Referred Successfully!`);
      }
    } catch (error) {
      toast.error(String(error));
    } finally {
      setFormLoading(false);
      setFormState({
        course_id: 1,
        referee_email: "",
        referrer_email: "",
        referee_name: "",
        referrer_name: "",
      });
    }
  };

  if (!isOpen) {
    return;
  }

  const onBlur = () => {
    setFieldErrors(null);
  };

  if (!auth) {
    onClose();
    alert("Login Required ");
    return;
  }

  return (
    <div
      onClick={() => onClose(() => setFieldErrors(null))}
      className="w-full fixed flex items-center p-5 justify-center bg-black bg-opacity-50 z-[20] min-h-full  backdrop-filter backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white opacity-100 rounded-lg overflow-auto"
      >
        <div className="w-full flex ">
          <Button
            onClick={() => onClose(() => setFieldErrors(null))}
            variant="ghost"
            size="icon"
            className="m-2 ml-auto rounded-full"
          >
            <XIcon className="w-3 h-3 mx-auto" />
          </Button>
        </div>
        <div className="w-full  flex md:flex-row flex-col">
          <img
            src="refer.svg"
            alt=""
            className="mx-auto md:block hidden border bg-gradient-to-b from-blue-200 to-blue-100"
            width={350}
            height={350}
          />
          <form action="" className="p-7">
            <div className="space-y-1 mb-7">
              <h1 className="font-semibold text-lg ">Refer a friend</h1>
              <p className="text-gray-600 text-sm">
                Invite your friends to join our courses and get rewarded.
              </p>
            </div>
            <div className="grid  md:grid-cols-2 grid-cols-1 gap-3 ">
              <FormInput
                name={"referrer_email"}
                onChange={onChange}
                // required={true}
                label={"Your email"}
                // placeholder={"Enter your email"}
                // errors={fieldErrors}
                onBlur={onBlur}
                value={auth?.email}
                
              />
              <FormInput
                name={"referrer_name"}
                onChange={onChange}
                label={"Your Name"}
                placeholder={"Enter your name"}
                errors={fieldErrors}
              />

              <FormInput
                name={"referee_email"}
                onChange={onChange}
                label={"Referee Email"}
                placeholder={"Enter referee email"}
                required={true}
                errors={fieldErrors}
              />
              <FormInput
                name={"referee_name"}
                onChange={onChange}
                label={"Referee Name"}
                placeholder={"Enter referee name"}
                errors={fieldErrors}
              />

              <label htmlFor="" className="md:col-span-2  gap-x-3 ">
                <p className="text-sm text-neutral-700">
                  Course <span className="text-red-500 ml-1 mt-2">*</span>{" "}
                  {isLoading && (
                    <span>
                      <LoaderCircle className="animate-spin w-7 h-7" />
                      (Please Wait for upto 50s ...doing a cold start until then
                      you will see default courses)
                    </span>
                  )}
                </p>
                {
                  <select
                    required
                    onChange={onChange}
                    name={"course_id"}
                    value={formState.course_id}
                    className="rounded-md text-sm p-2 border mt-2 w-full "
                  >
                    {courses?.map((course) => (
                      <option
                        key={course?.id}
                        className="capitalize"
                        value={course?.id}
                      >
                        {course?.title}
                      </option>
                    ))}
                  </select>
                }
              </label>
              <Button
                disabled={formLoading}
                onClick={onSubmit}
                className={"md:col-span-2 flex items-center justify-center"}
              >
                {formLoading ? (
                  <LoaderCircle className="animate-spin w-7 h-7" />
                ) : (
                  "Refer"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferalModal;
