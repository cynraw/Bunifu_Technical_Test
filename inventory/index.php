

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="inventory.css">
    <title>Inventory</title>
</head>
<body>
  <header>
        <h1>Welcome to the Magical Health Adventure!</h1>
        <p>Your journey to understanding your body and health begins here!</p>
    </header>

    <nav>
        <!-- Navigation links for easy access to different sections -->
        <ul>
            <li><a href="../">Home</a></li>
            <li><a href="../pharmacy">Pharmacy</a></li>
            <li><a href="./">Inventory</a></li>
        </ul>
    </nav>

    <h1>Inventory</h1>


    <form class="add-item-form" id="add-item-form">
  <h2>Add New Item</h2>
  <label for="product_name">Product Name:</label>
  <input type="text" id="product_name" name="product_name" required><br><br>
  <label for="stock">Stock:</label>
  <input type="number" id="stock" name="stock" min="0" required><br><br>
  <input type="submit" value="Add Item">
</form>


<table class="inventory-table">
  <tr>
    <th>Product Name</th>
    <th>Stock</th>
    <th>Delete</th>
  </tr>

  <?php

include('connect.php');

// SQL query to fetch all data
$sql = "SELECT id, product_name, stock FROM inventory";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "<tr><td>" . $row["product_name"] . "</td><td>" . $row["stock"] . "</td>";
    echo "<td><a href='delete_item.php?id=" . $row["id"] . "'>Delete</a></td></tr>";
  }
  echo "</table>";
} else {
  echo "<p id='no-items'>No items found</p>";
}

$conn->close();

?>
</table>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script>
  $(document).ready(function() {
    $("#add-item-form").submit(function(e) {
      e.preventDefault(); // Prevent default form submission

      // Get form data
      var product_name = $("#product_name").val();
      var stock = $("#stock").val();

      // Send AJAX request to add_item.php
      $.ajax({
        url: "./add_item.php",
        method: "POST",
        data: { product_name: product_name, stock: stock },
        success: function(response) {
          // Handle successful response
          console.log(response); // For debugging purposes
          // Add the newly added item to the table (see below)
          addRowToTable(product_name, stock);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          // Handle errors
          console.error(textStatus, errorThrown);
        }
      });
    });
  });

  function addRowToTable(productName, stock) {
    // Build the HTML for the new table row
    var newRow = "<tr><td>" + productName + "</td><td>" + stock + "</td></tr>";

    // reload the page to see the new item
    location.reload();
    // Append the new row to the inventory table
    $(".inventory-table").append(newRow);
  }
</script>
</body>
</html>

