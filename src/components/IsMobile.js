const getIsMobile = async (req) => {
  if (typeof window !== 'undefined') {
    const userAgent = window.navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  } else if (req) {
    const userAgent = req.headers['user-agent'];
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
  } else {
    return false;
  }
};

export default getIsMobile;
