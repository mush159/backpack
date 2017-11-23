/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';

import BpkSelect from 'bpk-component-select';
import BpkLink, { themeAttributes as linkThemeAttributes } from 'bpk-component-link';

import {
  colorBlue400,
  colorBlue500,
  colorBlue600,
  colorBlue800,
  colorRed400,
  colorRed500,
  colorRed600,
  colorRed800,
  colorYellow400,
  colorYellow500,
  colorYellow600,
  colorYellow800,
} from 'bpk-tokens/tokens/base.es6';

import BpkThemeProvider from './index';

const generateThemeAttributes = (linkTextColor, linkHoverColor, linkActiveColor, linkVisitedColor) => ({
  // linkTextColor,
  // linkHoverColor,
  // linkActiveColor,
  // linkVisitedColor,
});


class BpkThemePicker extends Component {
  constructor(props) {
    super(props);
    this.themes = {
      blue: generateThemeAttributes(colorBlue500, colorBlue400, colorBlue600, colorBlue800),
      yellow: generateThemeAttributes(colorYellow500, colorYellow400, colorYellow600, colorYellow800),
      red: generateThemeAttributes(colorRed500, colorRed400, colorRed600, colorRed800),
    };
    this.state = {
      themeId: 'blue',
      theme: this.themes.blue,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({
      themeId: value,
      theme: this.themes[value],
    });
  }

  render() {
    return (
      <div>
        <BpkSelect
          id="themes"
          name="themes"
          value={this.state.themeId}
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
        </BpkSelect>
        <BpkThemeProvider theme={this.state.theme} themeAttributes={[...linkThemeAttributes]}>
          <BpkLink onClick={() => {}}>Choose flight</BpkLink>
        </BpkThemeProvider>
      </div>
    );
  }
}

storiesOf('bpk-theming', module)
  .add('Default', () => (
    <BpkThemePicker />
  ));
