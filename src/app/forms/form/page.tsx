"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { UploadButton } from "@/utils/uploadthing";
import axios from "axios";
import { useState } from "react";

const FormLayout = () => {
  const [restaurant_id, setId] = useState("");
  const [table_name, setTable_name] = useState("");
  const [booking_status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [table_size, setTable_size] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [qaFields, setQaFields] = useState<
    { question: string; answer: string }[]
  >([{ question: "", answer: "" }]);

  const addQaField = () => {
    setQaFields([...qaFields, { question: "", answer: "" }]);
  };

  const handleQaChange = (
    index: number,
    field: keyof { question: string; answer: string },
    value: string,
  ) => {
    setQaFields((prevFields) => {
      const updatedFields = [...prevFields];
      updatedFields[index] = { ...updatedFields[index], [field]: value };
      return updatedFields;
    });
  };
  const saveImageToDatabase = async (imageUrl: string) => {
    setUploadedUrl(imageUrl);
    alert("Image uploaded successfully!");
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/restaurants/add_table",
        {
          restaurant_id,
          table_name,
          booking_status: 0,
          description,
          image: uploadedUrl || image,
          price,
          table_size,
        },
      );
      setSuccess("Table added successful!");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
      setError("Table add failed. Please fill it correctly.");
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Form" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <form action="#">
              <div className="p-6.5">
                {/* Title Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the title"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Subject Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Subject
                  </label>
                  <select className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                    <option value="">Select Subject</option>
                    <option value="Science">Science</option>
                    <option value="Math">Math</option>
                  </select>
                </div>

                {/* Categories Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Categories
                  </label>
                  <select className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                    <option value="">Select Category</option>
                    <option value="Science">Science</option>
                    <option value="Arts">Arts</option>
                  </select>
                </div>

                {/* Year Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Year
                  </label>
                  <input
                    type="date"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                {/* Exam Type Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Exam Type
                  </label>
                  <select className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                    <option value="">Select Exam Type</option>
                    <option value="BLE">BLE</option>
                    <option value="SEE">SEE</option>
                    <option value="+2 Boards">+2 Boards</option>
                  </select>
                </div>

                {/* Difficulty Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Difficulty
                  </label>
                  <select className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary">
                    <option value="">Select Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                    <option value="Difficult">Difficult</option>
                  </select>
                </div>

                {/* Description Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type your message"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                {/* PDF Upload Field */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Upload PDF
                  </label>
                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={async (res: { url: string }[]) => {
                      if (res && res[0]) {
                        await saveImageToDatabase(res[0].url);
                      }
                    }}
                    onUploadError={(err: any) => {
                      console.error(err);
                      alert("Upload failed");
                    }}
                  />
                  {/* <input
                    type="file"
                    accept="application/pdf"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  /> */}
                </div>

                {/* Question and Answer Fields */}
                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Questions and Answers
                  </label>
                  {qaFields.map((field, index) => (
                    <div key={index} className="mb-4">
                      <input
                        type="text"
                        placeholder={`Question ${index + 1}`}
                        value={field.question}
                        onChange={(e) =>
                          handleQaChange(index, "question", e.target.value)
                        }
                        className="mb-2 w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      <textarea
                        placeholder={`Answer ${index + 1}`}
                        value={field.answer}
                        onChange={(e) =>
                          handleQaChange(index, "answer", e.target.value)
                        }
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addQaField}
                    className="mt-2 flex w-full justify-center rounded bg-secondary p-3 font-medium text-white hover:bg-opacity-90"
                  >
                    Add Question & Answer
                  </button>
                </div>

                {/* Submit Button */}
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-white hover:bg-opacity-90">
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
