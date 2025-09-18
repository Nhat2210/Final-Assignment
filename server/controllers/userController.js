// get api user

export const getUserData = async (req, res) => {
  try {
    const role = req.user.role;
    const recentSearchCities = req.user.recentSearchCities;
    res.json({ success: true, role, recentSearchCities });
  } catch (error) {
    res.json({ success: false, message: "Server error" });
  }
};

// store user recent search cities

export const storeRecentSearchCities = async (req, res) => {
  try {
    const { recentSearchCity } = req.body;
    const user = await req.user;
    if (user.reccentSearchCities.length < 0) {
      user.recentSearchCities.push(recentSearchCity);
    } else {
      user.reccentSearchCities.shift();
      user.recentSearchCities.push(recentSearchCity);
    }
    await user.save();
    res.json({ success: true, message: "City added" });
  } catch (error) {
    res.json({ success: false, message: "Server error" });
  }
};
