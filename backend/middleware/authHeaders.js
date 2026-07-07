const authHeaders = (req, res, next) => {
  const tenantId = req.header("X-Tenant-Id");
  const userId = req.header("X-User-Id");

  if (!tenantId || !userId) {
    return res.status(400).json({
      message: "X-Tenant-Id and X-User-Id headers are required",
    });
  }

  req.tenantId = tenantId;
  req.userId = userId;

  next();
};

module.exports = authHeaders;