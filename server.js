const express = require('express');
const axios = require('axios');

const app = express();

// ✅ Use Render's required port
const PORT = process.env.PORT || 3000;

app.get('/get-location', async (req, res) => {
    const username = req.query.username;
    if (!username) return res.status(400).json({ error: "Username required!" });

    try {
        const response = await axios.get(`http://ip-api.com/json/`);
        return res.json(response.data);
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch location" });
    }
});

// ✅ Make sure the app listens on the correct port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
