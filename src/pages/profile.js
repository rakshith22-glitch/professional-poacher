import React, { useState } from 'react';
import { Container, Box, Typography, Avatar, Button, TextField } from '@mui/material';
import { UPDATE_USER, GET_USER_INFO } from '../graphql/mutation';
import { useMutation ,useQuery } from '@apollo/client';
const ProfilePage = ({ profile }) => {
    // const { loading1, error1, data1 } = useQuery(GET_USER_INFO);
    // const [updateUser, { data, loading, error }] = useMutation(UPDATE_USER);
    // console.log("USERINFO", data1)
    const [isEditMode, setIsEditMode] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullname: 'me',
        email: 'me',
        phonenumber: 'me',
        imageUrl: 'me'
    });

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        // updateUser({ variables: { 
        //     id: profile.id, 
        //     fullname: userInfo.fullname, 
        //     email: userInfo.email, 
        //     phonenumber: userInfo.phonenumber 
        // }});
        setIsEditMode(false);
    };

    const handleChange = (event) => {
        setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '250px' }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Avatar
                    alt={userInfo.fullname}
                    src={userInfo.imageUrl}
                    sx={{ width: 100, height: 100 }}
                />
                {isEditMode ? (
                    <>
                        <TextField
                            label="Full Name"
                            name="fullname"
                            value={userInfo.fullname}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <TextField
                            label="Phone Number"
                            name="phonenumber"
                            value={userInfo.phonenumber}
                            onChange={handleChange}
                            margin="normal"
                        />
                        <Button color="primary" variant="contained" onClick={handleSaveClick}>
                            Save
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h5" style={{ margin: '20px 0' }}>
                            {userInfo.fullname}
                        </Typography>
                        <Typography variant="body1">{userInfo.email}</Typography>
                        <Typography variant="body1">{userInfo.phonenumber}</Typography>
                        <Button color="primary" variant="contained" onClick={handleEditClick}>
                            Edit
                        </Button>
                    </>
                )}
            </Box>
        </Container>
    );
};

export default ProfilePage;
