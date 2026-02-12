const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const taskRoutes = require('./routes/tasks');
const submissionRoutes = require('./routes/submissions');

// Use routes
app.use('/api/tasks', taskRoutes);
app.use('/api/submissions', submissionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
