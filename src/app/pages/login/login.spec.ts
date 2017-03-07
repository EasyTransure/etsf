//import { Component } from '@angular/core';
import { Login } from './login';
import { User } from '../../model/_model';
import { NavController, AlertController } from 'ionic-angular';


describe('Page: My News List', () => {
  let component: Login;
  let alertController: AlertController;
  let navController: NavController;
  let user: User;

  beforeEach(() => {
    user = new User(1, '', '', '', '');
    component = new Login( alertController, navController );
  });

  describe('at initialization', () => {
    it('should initialize the user', () => {
      expect(component.user).toEqual(user);
    });
    it('should initialize the error indicator to false', () => {
      expect(component.errorOccurred).toBe(false);
    });
  });
/*
  describe('onSubmit', () => {
    it('should redirect to user edition page', () => {
      component.onSubmit();
      expect().toHaveBeenCalledWith();
    });
*/
});