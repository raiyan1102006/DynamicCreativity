import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import {
  Button,
  Grid,
  Header,
  Modal,
  Container,
  Segment,
  Icon,
  Form,
  Message,
  Card,
  List,
  Rating
} from 'semantic-ui-react';

class UsersScreen extends Component {

  render() {

    return (
      <Segment vertical>
        <Container>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card fluid color='teal'>
                  <Button  color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>
                        List item
                        <Rating maxRating={5} clearable/> </List.Item>
                      <List.Item>
                        List item
                        <Rating maxRating={5} clearable/>
                      </List.Item>
                      <List.Item>
                        List item
                        <Rating maxRating={5} clearable/>
                      </List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card fluid color='teal'>
                  <Button color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card fluid color='teal'>
                  <Button color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card fluid color='teal'>
                  <Button  color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>Someone</Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card fluid color='teal'>
                  <Button color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card fluid color='teal'>
                  <Button color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card fluid color='teal'>
                  <Button  color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card fluid color='teal'>
                  <Button color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card fluid color='teal'>
                  <Button color='teal'>
                    <Card.Content className='teal'>
                      <Card.Header textAlign='center'>
                        <Icon name='check circle outline'></Icon>Someone
                      </Card.Header>
                    </Card.Content>
                  </Button>

                  <Card.Content textAlign='center'>
                    <List>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                      <List.Item>List item <Rating maxRating={5} clearable/></List.Item>
                    </List>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container textAlign='right'>
          <Button>
            <Link to='/secondTaskScreen'>Next Task</Link>
          </Button>
        </Container>
      </Segment>
    );
  }
}

export default UsersScreen;
