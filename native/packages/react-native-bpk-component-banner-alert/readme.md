# react-native-bpk-component-banner-alert

> Backpack React Native banner alert component.

## Installation

```sh
npm install react-native-bpk-component-banner-alert --save-dev
```

## Usage

```js
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import BpkText from 'react-native-bpk-component-text';
import { spacingBase } from 'bpk-tokens/tokens/base.react.native';
import BpkBannerAlert, {ALERT_TYPES} from 'react-native-bpk-component-banner-alert';

import { translationHelper } from 'translations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: TOKENS.spacingBase,
  },
  bannerAlert: {
    marginBottom: TOKENS.spacingBase,
  }
});

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      showDismissable: true,
      expanded: false,
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onExpandablePress = this.onExpandablePress.bind(this);
  }

  onDismiss() {
    this.setState({ showDismissable: false });
  }

  onExpandablePress() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <View style={styles.container}>
        <BpkBannerAlert
          style={styles.bannerAlert}
          type={ALERT_TYPES.SUCCESS}
          message={translationHelper.translate('SUCCESS_MESSAGE')}
        />
        <BpkBannerAlert
          style={styles.bannerAlert}
          type={ALERT_TYPES.WARN}
          message={translationHelper.translate('WARN_MESSAGE')}
          dismissButonLabel="Dismiss"
          onDismiss={this.onDismiss}
          dismissable
          show={this.state.showDismissable}
        />
        <BpkBannerAlert
          style={styles.bannerAlert}
          type={ALERT_TYPES.ERROR}
          message={translationHelper.translate('ERROR_MESSAGE')}
          toggleExpandedButtonLabel={translationHelper.translate('EXPAND')}
          onToggleExpanded={this.onExpandablePress}
          expanded={this.state.expanded}
        >
          <BpkText textStyle="sm" style={styles.child}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis sagittis purus, id blandit ipsum.
            Pellentesque nec diam nec erat condimentum dapibus. Nunc diam augue, egestas id egestas ut, facilisis nec mi.
            Donec et congue odio, nec laoreet est. Integer rhoncus varius arcu, a fringilla libero laoreet at.
          </BpkText>
        </BpkBannerAlert>
      </View>
    );
  }
}
```

## Props

| Property                  | PropType           | Required | Default Value |
| ------------------------- | ------------------ | -------- | ------------- |
| message                   | string             | yes      | -             |
| type                      | oneOf(ALERT_TYPES) | yes      | -             |
| animateOnEnter            | bool               | no       | false         |
| animateOnLeave            | bool               | no       | false         |
| children                  | node               | no       | null          |
| dismissable               | bool               | no       | false         |
| dismissButonLabel         | String             | no       | null          |
| expanded                  | bool               | no       | false         |
| onDismiss                 | func               | no       | null          |
| onToggleExpanded          | func               | no       | null          |
| show                      | bool               | no       | true          |
| toggleExpandedButtonLabel | String             | no       | null          |
