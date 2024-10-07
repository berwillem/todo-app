


const adminCheck = async (req, res, next) => {
	const { email } = req.body

    try
	{
		const user = await User.findOne({ email });
		
		// checing if user exists and logged in
		if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
		// checing if user is admin and exists
        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: "Unauthorized" });
        }
		
        next();
	}
	catch (error)
	{
		res.status(500).json({ message: "Server Error" });
	}
};