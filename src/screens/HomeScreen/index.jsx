import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";

export default function HomeScreen() {
  return (
    <>
      <h1>Letest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  );
}
