import { AppBar, Box, Button, Card, CardContent, Hidden, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { SubmitSRequest } from "../../../Redux/apiCalls";
import RequestSubmitted from "./RequestSubmitted";


function CreateRequest(props) {
    const { subMainID } = useParams()
    const [SubServiceFlag, setSubServiceFlag] = useState(false);
    const [V_SubServices, setV_SubServices] = useState([]);
    const [apipost, setapipost] = useState(false)
    const globaluser = useSelector((state) => state.user);
    const globalLoading = useSelector((state) => state.loading);
    const dispatch = useDispatch();
    const [requestData, setRequestData] = useState({
        ServiceID: V_SubServices.id,
        UserId: globaluser.userInfo.id,
        Contact: globaluser.userInfo.phone,
        Address: '',
        Comments: ''
    });

    const handleInputChange = (e) =>
        setRequestData({ ...requestData, [e.target.name]: e.target.value });

    const submitForm = async (e) => {
        e.preventDefault();
        setRequestData({ ...requestData, ServiceID: V_SubServices.id })
        const rres = await SubmitSRequest(requestData, dispatch)
        setapipost(globalLoading.apiRequest.status)
        console.log("requestData", rres);
    }


    //getting all services efrom apdfsssssddffsdfsdf
    const retriveAllSubServices = async () => {
        const url = "https://krishnabharambe.pythonanywhere.com/api/SubService/" + subMainID + "/";
        const response = await axios.get(url);
        if (!response.data || response.data.length == 0) {
            setSubServiceFlag(false);
        } else {
            setSubServiceFlag(true);
            return response.data;
        }
    };

    useEffect(() => {
        const getAllSubServices = async () => {
            const allSubServices = await retriveAllSubServices();
            if (allSubServices) {
                setV_SubServices(allSubServices);
                setRequestData({ ...requestData, ServiceID: V_SubServices.id })
            }
        };
        getAllSubServices();
    }, []);

    return (
        <div>
            {apipost ? <RequestSubmitted /> : <div>
                <Hidden mdUp>
                    <AppBar>
                        <Toolbar>
                            <Typography variant="h6">
                                Create Request
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <br />
                    <br />
                    <br />
                </Hidden>
                <div>
                    <CardContent>
                        <form onSubmit={submitForm}>
                            <Box fontWeight="fontWeightBold">{V_SubServices.title}</Box>
                            <Typography >
                                {V_SubServices.shortdescription}
                            </Typography>

                            <TextField
                                style={{ textAlign: 'left' }}
                                hintText="Address"
                                label="Address"
                                fullWidth
                                floatingLabelText="MultiLine and FloatingLabel"
                                multiline
                                rows={4}
                                name="Address"
                                variant="standard"
                                value={requestData.Address}
                                onChange={handleInputChange}
                            />

                            <TextField sx={{ mt: 2 }}
                                style={{ textAlign: 'left' }}
                                hintText="Comments/Instructions"
                                label="Comments/Instructions"
                                fullWidth
                                floatingLabelText="MultiLine and FloatingLabel"
                                multiline
                                rows={4}
                                name="Comments"
                                variant="standard"
                                value={requestData.Comments}
                                onChange={handleInputChange}

                            />

                            <Button
                                sx={{ mt: 2 }}
                                variant="outlined"
                                color="primary"
                                type="submit"
                            >
                                Submit Request
                            </Button>
                        </form>
                    </CardContent>
                </div>
            </div>}
        </div>
    );
}

export default CreateRequest;