<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);


$veritabani = "yeyemek";   
$tablo     = "xxxx";   

$conn = new mysqli("localhost", "xxxx", "xxxx", $veritabani);

if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

$email = $_POST['email'] ?? '';
$pass  = $_POST['pass'] ?? '';

$stmt = $conn->prepare("SELECT * FROM $tablo WHERE email = ? AND pass = ?");
$stmt->bind_param("ss", $email, $pass);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    header("Location: user.html");
    exit();
} else {
    echo "<script>alert('E-Posta veya Şifre hatalı!'); window.history.back();</script>";
}

$stmt->close();
$conn->close();
?>

