import React from "react";

const SimpleForm2 = () => {
  const emailInputRef = useRef();
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const handleFormSubmission = (event) => {
    event.preventDefault();
    const inputEmail = emailInputRef.current.value;
    if (inputEmail.include("@")) {
      setValidEmail(true);
      setSubmittedEmail(inputEmail);
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleFormSubmission}>
        <div className="row">
          <div className="col-sm-5">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-sm-7">
            <input id="email" type="text" ref={emailInputRef} />
          </div>
        </div>
      </form>
      <br />
      <h2>{validEmail ? "email valid" : "email invalid"}</h2>
      <h2>{submittedEmail}</h2>
    </>
  );
};

export default SimpleForm;
