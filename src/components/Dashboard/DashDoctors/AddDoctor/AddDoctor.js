import React, { useState } from "react";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddDoctor.css";

const AddDoctor = () => {
  const [imgName, setImgName] = useState("");
  const [addStatus, setAddStatus] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    setAddStatus(false);
    setDisableBtn(true);
    let doctorData = new FormData();
    doctorData.append("doctorImg", data.doctorImg);
    doctorData.append("doctorName", data.doctorName);
    doctorData.append("specialist", data.specialist);
    doctorData.append("doctorEmail", data.doctorEmail);

    fetch("https://shrouded-brook-48467.herokuapp.com/addDoctor", {
      method: "POST",
      body: doctorData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAddStatus(true);
          setDisableBtn(false);
          reset();
          setImgName("");
        }
      });
  };

  const handleImgChange = (e) => {
    setValue("doctorImg", e.target.files[0]);
    setImgName(e.target.files[0].name);
  };

  return (
    <Container fluid>
      <h3 className="dashboard-page-title">Add Doctor</h3>
      {addStatus && <Alert variant="success">Doctor added successfully</Alert>}
      <form id="add-doctor-form" className="add-doctor-form" onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md={6}>
            <div className="mb-3">
              <label htmlFor="">Doctor Name</label>
              <input type="text" className="form-control" {...register("doctorName", { required: true })} />
              {errors.doctorName && <span className="error">This field is required</span>}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <label htmlFor="">Specialist On</label>
              <input type="text" className="form-control" {...register("specialist", { required: true })} />
              {errors.specialist && <span className="error">This field is required</span>}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <label htmlFor="">Email Address</label>
              <input type="text" className="form-control" {...register("doctorEmail", { required: true })} />
              {errors.doctorEmail && <span className="error">This field is required</span>}
            </div>
          </Col>
          <Col md={6}>
            <div className="mb-3">
              <label htmlFor="">Doctor Image</label> <br />
              <label className="doctor-img-upload" htmlFor="doctor-img-upload">
                <i className="fas fa-cloud-upload-alt"></i>
                Upload Image
                {/* <input type="file" id="doctor-img-upload" className="doctor-img-upload" {...register("doctorImg")} /> */}
                {/* {errors.doctorImg && <span className="error">This field is required</span>} */}
                <input name="doctorImg" id="doctor-img-upload" onChange={handleImgChange} type="file" />
              </label>
              <span>{imgName && imgName}</span>
              {/* {uploadStatus && uploadStatus === "uploading" && doctorImgName && (
                <Spinner className="ml-3" animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              )}
              {uploadStatus && uploadStatus === "complete" && doctorImgName && <i className="fas fa-check-circle fa-2x ml-3 text-success"></i>} */}
            </div>
          </Col>
          <Col sm={12}>
            <button type="submit" disabled={disableBtn} className="btn main-btn">
              Add Doctor
            </button>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default AddDoctor;
