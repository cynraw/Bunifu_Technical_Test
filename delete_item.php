<?php

include('connect.php');

$id = $_GET['id'];

// SQL query to delete data
$sql = "DELETE FROM inventory WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
  echo "Record deleted successfully!";
  header("Location: inventory.php"); // Redirect back to inventory after deletion
} else {
  echo "Error deleting record: " . $conn->error;
}

$conn->close();

?>
