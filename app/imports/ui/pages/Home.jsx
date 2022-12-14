import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Notes } from '../../api/note/Note';
import LoadingSpinner from '../components/LoadingSpinner';
import { Profiles } from '../../api/profiles/Profiles';
import NoteCard from '../components/NoteCard';
import { PageIDs } from '../utilities/ids';

/* Renders the Home Page: what appears after the user logs in. */
const Home = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { ready } = useTracker(() => {
    // Note that this subscription will get cleaned up
    // when your component is unmounted or deps change.
    // Get access to Stuff documents.
    const sub1 = Meteor.subscribe(Profiles.userPublicationName);
    const sub2 = Meteor.subscribe(Notes.userPublicationName);
    // Determine if the subscription is ready
    const rdy1 = sub1.ready();
    const rdy2 = sub2.ready();
    const rdy = rdy1 && rdy2;
    return {
      ready: rdy,
    };
  }, []);
  let profile;
  let email;
  let courses;
  if (ready) {
    profile = Profiles.collection.findOne({ email: Meteor.user().username });
    email = profile.email;
    courses = profile.courseInterests;
  }
  const recommendedNotes = (courses !== undefined) ? Notes.collection.find({ course: { $in: courses } }).fetch() : {};
  const userNotes = Notes.collection.find({ owner: email }).fetch();

  return ready ? (
    <Container className="py-3" id={PageIDs.homePage}>
      <Row className="py-3">
        <h2>Recommended Notes</h2>
        {
          courses !== undefined ?
            recommendedNotes.map(note => <NoteCard key={note._id} note={note} removable={false} />) : (
              <p style={{ fontSize: '18px' }}>
                Please update your profile in order to receive recommendations.
                <Button className="ms-2" variant="success" as={Link} to="/profile">Edit Profile</Button>
              </p>
            )
        }
      </Row>
      <Row className="py-3">
        <h2>Your Notes</h2>
        {
          userNotes.length > 0 ?
            userNotes.map(note => <NoteCard key={note._id} note={note} removable />) : (
              <p style={{ fontSize: '18px' }}>
                You currently have no notes. Add some here:
                <Button className="ms-2" variant="success" as={Link} to="/addNote">Add notes</Button>
              </p>
            )
        }
      </Row>
      <h2 className="py-3">
        First time logging in? Edit your profile here:
        <Button className="ms-2" variant="success" as={Link} to="/profile">Edit Profile</Button>
      </h2>
    </Container>
  ) : <LoadingSpinner />;
};

export default Home;
