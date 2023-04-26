const express = require("express");
const postdb = require("../models/post");
const sheduledb = require("../models/shedule");

const router = express.Router();

// Get all users
router.get("/", (req, res) => {
  postdb.find().exec((err, post) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPost: post,
    });
  });
});

// Add new user route
router.post("/save", (req, res) => {
  let newPost = new postdb(req.body);
  newPost.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Security details saved successfully !!",
    });
  });
});

// get a specific post
router.get("/singlepost/:id", (req, res) => {
  const postId = req.params.id;
  postdb.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      post,
    });
  });
});

// update
router.put("/update/:id", (req, res) => {
  postdb.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).json({
          error: err,
        });
      }
      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
});


// delete post
router.delete("/delete/:id", (req, res) => {
  postdb.findByIdAndRemove(req.params.id).exec( async (err, deletedPost) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccesssful !!",
        err,
      });
    try {
      await sheduledb.findOneAndDelete({ post: req.params.id });
    } catch (error) {
      console.error(error);
    }
    return res.json({
      message: "Deleted !!",
      deletedPost,
    });
  });
});

// get user who are not assign
router.get("/freeuser", async (req, res) => {
  let users = await postdb.find();
  let shed = await sheduledb.find().populate("post", ["id"]);
  if (shed) {
    const freeuser = users.filter((user) => {
      return !shed.some((sh) => {
        return sh.post.id == user.id;
      });
    });
    return res.status(200).json({ success: true, freeuser });
  }
  return res.status(200).json({ success: true, freeuser: users });
});

// get shedule of users
router.get("/getshedule", async (req, res) => {
  try {
    let shed = await sheduledb.find().populate("post", ["name"]);
    if (!shed) {
      return res
        .status(500)
        .json({ success: false, error: "Some thing went wrong!" });
    }
    let time = {
      am: [],
      an: [],
      bm: [],
      bn: [],
      cm: [],
      cn: [],
    };
    shed.forEach((sh) => {
      if (sh.point == "A" && sh.shift == "M") {
        time.am.push(sh);
      } else if (sh.point == "A" && sh.shift == "N") {
        time.an.push(sh);
      } else if (sh.point == "B" && sh.shift == "M") {
        time.bm.push(sh);
      } else if (sh.point == "B" && sh.shift == "N") {
        time.bn.push(sh);
      } else if (sh.point == "C" && sh.shift == "M") {
        time.cm.push(sh);
      } else if (sh.point == "C" && sh.shift == "N") {
        time.cn.push(sh);
      }
    });
    return res.status(200).json({ success: true, shedule: time });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Some thing went wrong!" });
  }
});

// Add user to shedule
router.post("/schedule", async (req, res) => {
  try {
    const { id, point, shift } = req.body;
    if (id && point && shift) {
      const sh = new sheduledb({
        post: id,
        point,
        shift,
      });
      await sh.save();
      return res.status(200).json({ success: true });
    }
    return res.status(400).json({ success: false });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Some thing went wrong!" });
  }
});

// remove user to shedule
router.delete("/removeshedule/:id", async (req, res) => {
  try {
    await sheduledb.findOneAndDelete({ post: req.params.id });
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, error: "Some thing went wrong!" });
  }
});



module.exports = router;
