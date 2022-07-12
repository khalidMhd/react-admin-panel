import React from "react";
import './App.css';
import DashboardScreen from "../src/screen/Dashboard";
import ProjectsScreen from "../src/screen/Projects";
import { Route, Routes } from 'react-router-dom'
import AddProjectsScreen from "./screen/AddProjects";
import UpdateProjectsScreen from "./screen/UpdateProjects";
import CompalintsScreen from "./screen/Complaints";
import UsersScreen from "./screen/Users";
import SignupScreen from "../src/screen/auth/signup";
import FilesScreen from "./screen/Files";
import AddFilesScreen from "./screen/addFiles";
import SigninScreen from "./screen/auth/singin";
export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<DashboardScreen/>} />
      <Route exact path='/projects/:type' element={<ProjectsScreen/>} />
      <Route exact path='/add-project' element={<AddProjectsScreen/>} />
      <Route exact path='/update-project' element={<UpdateProjectsScreen/>} />
      <Route exact path='/complaints' element={<CompalintsScreen/>} />
      <Route exact path='/users' element={<UsersScreen/>} />
      <Route exact path='/add-users' element={<SignupScreen/>} />
      <Route exact path='/signin' element={<SigninScreen/>} />
      <Route exact path='/files' element={<FilesScreen/>} />
      <Route exact path='/add-files' element={<AddFilesScreen/>} />
    </Routes>
  );
}
