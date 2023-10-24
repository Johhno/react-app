import Teacher, { promote } from './Teacher.js';
import React, { Component } from 'react';


// Default -> import ... from '';
// Named -> import { ... } from '';

const teacher = new Teacher("John", 'BSc');
teacher.teach();