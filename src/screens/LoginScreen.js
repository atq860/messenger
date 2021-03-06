import { useState } from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("here");
  };

  return (
    <Row xs={1} md={2} className="register-page-box g-5 py-5">
      <Col md={12}>
        <Card
          style={{
            height: "79vh",
            background: "#F8F8F8",
            borderRadius: "20px",
          }}
          className="border-responsive register-page-box-shadow"
        >
          <Card.Body style={{ padding: "0" }}>
            <div className="register-page">
              <div className="register-page-left">
                <div
                  className="register-page-left-box"
                  style={{ fontFamily: "Calibri" }}
                >
                  <FormContainer>
                    <img
                      src="\logo192.png"
                      alt="logo"
                      className="logoImage"
                      style={{ marginTop: "6rem" }}
                    />

                    <h6 style={{ textAlign: "center", marginTop: "1.5rem" }}>
                      Sign In to Dashboard
                    </h6>
                    {/* Calibri Candara Comic Sans MS*/}
                    <Form
                      onSubmit={submitHandler}
                      style={{ marginTop: "1rem" }}
                    >
                      <Form.Group controlId="email" className="mt-2">
                        <Form.Label style={{ color: "grey" }}>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Type your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="input-border"
                        ></Form.Control>
                      </Form.Group>

                      <Form.Group controlId="password" className="mt-3">
                        <Form.Label style={{ color: "grey" }}>
                          Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Type your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input-border"
                        ></Form.Control>
                      </Form.Group>
                      <Link
                        to="reset-password"
                        className="float-right mt-4"
                        style={{ textDecoration: "none" }}
                      >
                        Reset Password
                      </Link>

                      <Form.Group controlId="rememberMe" className="mt-4">
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          checked={rememberMe}
                          onChange={(e) => {
                            setRememberMe(e.target.checked);
                          }}
                        ></Form.Check>
                      </Form.Group>

                      <Button
                        type="submit"
                        variant="primary"
                        className="btn btn-block mt-4"
                        style={{
                          backgroundColor: "rgba(0, 0, 255, 0.8)",
                          boxShadow: "rgba(0, 0, 0, 0.40) 0px 5px 20px",
                        }}
                      >
                        Login
                      </Button>
                    </Form>

                    <Row style={{ textAlign: "center", marginTop: "5rem" }}>
                      <Col>
                        New to App?{" "}
                        <Link to="/register" style={{ textDecoration: "none" }}>
                          Register
                        </Link>
                      </Col>
                    </Row>
                  </FormContainer>
                </div>
              </div>

              <div className="register-page-right">
                <div
                  className="register-page-right-box"
                  style={{ color: "white" }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: "2" }}></div>
                    <div style={{ flex: "5" }}>
                      <img
                        src="/images/quotation.png"
                        style={{
                          width: "45px",
                          height: "45px",
                          borderRadius: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={{ flex: "2" }}></div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ flex: "2" }}></div>
                    <div style={{ flex: "5" }}>
                      <h1 style={{ fontSize: "5rem" }}>Make a Dream.</h1>
                    </div>
                    <div style={{ flex: "2" }}></div>
                  </div>
                  <div style={{ display: "flex", marginTop: "2rem" }}>
                    <div style={{ flex: "2" }}></div>
                    <div style={{ flex: "5" }}>
                      <p style={{ marginLeft: "6rem" }}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna."
                      </p>
                    </div>
                    <div style={{ flex: "2" }}></div>
                  </div>
                  {/* <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                      <h1 style={{ fontSize: "6rem" }}>Make a Dream.</h1>
                    </Col>
                    <Col md={3}></Col>
                  </Row>
                  <Row style={{ marginTop: "2rem" }}>
                    <Col md={4}></Col>
                    <Col md={6}>
                      <p style={{ marginLeft: "3rem" }}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna."
                      </p>
                    </Col>
                    <Col md={2}></Col>
                  </Row> */}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default LoginScreen;
