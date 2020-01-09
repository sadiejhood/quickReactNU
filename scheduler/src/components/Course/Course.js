import React, { useState, useEffect } from 'react';
import { Button, Container, Title, Message } from 'rbx';
import { hasConflict, moveCourse, getCourseTerm } from './times.js';

const buttonColor = selected => (
    selected ? 'success' : null
);

const getCourseNumber = course => (
  course.id.slice(1, 4)
);

const Course = ({ course, state, db }) => (
    <Button color={ buttonColor(state.selected.includes(course)) }
      onClick={ () => state.toggle(course) }
      onDoubleClick={ () => moveCourse(course, db) }
      disabled={ hasConflict(course, state.selected) }
      >
      { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
    </Button>
  );

export default Course;