<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">  <!-- Verlinkung zu deiner styles.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <title>düzce-Bank - IBAN</title>
</head>
<body>
    <div class="container">
        <h2><i class="fas fa-credit-card"></i> IBAN Eingabe</h2>
        <form id="ibanForm">
            <label for="iban">Geben Sie Ihre IBAN ein:</label>
            <input type="text" id="iban" name="iban" placeholder="DEkk BBBB BBBB CCCC CCCC CC" required>
            <button type="submit"><i class="fas fa-check-circle"></i> Prüfen</button>
        </form>
        <div id="message"></div>
    </div>

    <!-- Verlinkung zu deiner JavaScript-Datei -->
    <script src="iban.js"></script>
</body>
</html>
