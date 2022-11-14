import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { _ } from 'meteor/underscore';
import SimpleSchema from 'simpl-schema';
import { pageStyle } from './pageStyles';
import { Courses } from './ListCourses';

/* Create a schema to specify the structure of the data to appear in the form. */
const makeSchema = (courses) => new SimpleSchema({
  firstName: { type: String, label: 'First', optional: true },
  lastName: { type: String, label: 'Last', optional: true },
  email: { type: String, label: 'Email', optional: true },
  bio: { type: String, label: 'Biography', optional: true },
  picture: { type: String, label: 'Picture URL', optional: true },
  coursesTaken: { type: Array, label: 'Courses Taken', optional: true },
  'coursesTaken.$': { type: String, allowedValues: courses },
  courseInterests: { type: Array, label: 'Courses Interested In', optional: true },
  'courseInterests.$': { type: String, allowedValues: courses },
});

const Profile = () => {
  const formSchema = makeSchema(_.pluck(Courses, 'name'));
  const bridge = new SimpleSchema2Bridge(formSchema);

  return (
    <Container className="justify-content-center" style={pageStyle}>
      <Col>
        <Col className="justify-content-center text-center"><h2>Your Profile</h2></Col>
        <AutoForm schema={bridge}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={4}><TextField name="firstName" showInlineError placeholder="First Name" /></Col>
                <Col xs={4}><TextField name="lastName" showInlineError placeholder="Last Name" /></Col>
                <Col xs={4}><TextField name="email" showInlineError placeholder="email" disabled /></Col>
              </Row>
              <LongTextField name="bio" placeholder="Write a little bit about yourself." />
              <Row>
                <Col xs={4}><TextField name="picture" showInlineError placeholder="URL to picture" /></Col>
                <Col xs={4}><SelectField name="coursesTaken" showInlineError multiple /></Col>
                <Col xs={4}><SelectField name="courseInterests" showInlineError multiple /></Col>
              </Row>
              <SubmitField value="Update" />
            </Card.Body>
          </Card>
        </AutoForm>
      </Col>
    </Container>
  );
};

export default Profile;