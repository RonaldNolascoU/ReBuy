import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';

class Login extends Component {
    state = {}
    render() {
        return (
            <Grid centered padded="horizontally">
                <Grid.Row>
                    <Grid.Column width={15} >
                        <Form widths={"equal"}>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                            <Button type='submit' className="btn">Submit</Button>
                        </Form>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Login;