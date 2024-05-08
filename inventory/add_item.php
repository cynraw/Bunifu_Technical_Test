<?php

include('connect.php');

// Get form data
$product_name = $_POST['product_name'];
$stock = $_POST['stock'];

// SQL query to insert data
$sql = "INSERT INTO inventory (product_name, stock) VALUES ('$product_name', '$stock')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
