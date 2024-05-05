import {
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
  Input,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const fetchProducts = async () => {
    try {
      setisLoading(true);
      const controller = new AbortController();
      await axios
        .get("https://dummyjson.com/products", { signal: controller.signal })
        .then((response) => setProducts(response.data.products));
      setisLoading(false);
      return () => controller.abort();
    } catch (error) {
      console.error("Error Occurs", error);
      setisLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    console.log(`Fetching products in ${category}`);
    fetchProducts();
  }, [category]);
  const handleDelete = (product, index) => {
    setProducts(products.filter((item, idx) => idx != index));
    axios.delete("https://dummyjson.com/products/" + product.id);
  };
  const addProduct = () => {
    const newProduct = { id: 10, title: "Dummy Phone", description: "S24" };
    setProducts([newProduct, ...products]);
    axios
      .post("https://dummyjson.com/products/", newProduct)
      .then((response) => console.log(response));
  };
  return (
    <>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!error && (
          <>
            {!isLoading ? (
              <>
                <h1>PRODUCTS</h1>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "10px",
                  }}
                >
                  <Button onClick={addProduct}>Add</Button>
                  <div style={{ marginLeft: "auto" }}>
                    <Select
                      onChange={(event) => setCategory(event.target.value)}
                    >
                      <MenuItem value="clothing">Clothing</MenuItem>
                      <MenuItem value="household">HouseHold</MenuItem>
                    </Select>
                  </div>
                </div>
                <br /> <br />
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  {products.map((e, index) => (
                    <TableBody>
                      <TableRow key={e.id}>
                        <TableCell>{e.id}</TableCell>
                        <TableCell>{e.title}</TableCell>
                        <TableCell>{e.description}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => {
                              handleDelete(e, index);
                            }}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                </Table>
              </>
            ) : (
              <CircularProgress />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ProductList;
