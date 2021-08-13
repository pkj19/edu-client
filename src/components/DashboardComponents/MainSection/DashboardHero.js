import React, { useState } from "react";
import { Avatar, Box, makeStyles, Typography, Button, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import ProfileHeroLayout from "../ProfileHeroLayout";
import ProfileSkeleton from "../../skeleton/ProfileSkeleton";
import EditProfile from "./EditProfile";

function DashboardHero() {
  const classes = useStyles();

  const user = useSelector((state) => state.account.user);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {user ? (
        <ProfileHeroLayout>
          <Box className={classes.wrapper}>
            <Avatar className={classes.avatar} src={user.photoURL} />
            <CircularProgress
              size={135}
              variant="determinate"
              className={classes.avatarProgress}
              value={50}
            />
          </Box>
          <Box className={classes.infoContainer}>
            <Typography variant="h2" component="span" className={classes.span1}>
              Hello
            </Typography>
            <Typography variant="h2" component="span">
              {user.displayName}
            </Typography>
            <Box mt={2}>
              <Typography variant="body1">{user.email}</Typography>
            </Box>
            <Box mt={5}>
              <Button className={classes.editButton} onClick={() => handleOpen()}>
                Edit profile
              </Button>
            </Box>
          </Box>
        </ProfileHeroLayout>
      ) : (
        <ProfileSkeleton />
      )}
      <EditProfile open={open} onClose={handleClose} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 120,
    width: 120,
    zIndex: 2,
  },
  avatarProgress: {
    color: "#DAF1FF",
    position: "absolute",
    top: -7,
    left: -7,
    zIndex: 1,
  },
  wrapper: {
    position: "relative",
  },

  infoContainer: {
    color: "#fff",
    marginLeft: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  editButton: {
    color: "#fff",
    border: "1px solid #fff",
    textTransform: "none",
  },
  span1: {
    marginRight: theme.spacing(1),
    fontWeight: 200,
  },
  vec1: {
    position: "absolute",
  },
}));

export default DashboardHero;
