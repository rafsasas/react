// import React, {useEffect} from 'react';
// import {EventEmitter, TouchableOpacity, View, Text} from 'react-native';
// import {
//   TourGuideProvider, // Main provider
//   TourGuideZone, // Main wrapper of highlight component
//   TourGuideZoneByPosition, // Component to use mask on overlay (ie, position absolute)
//   useTourGuideController, // hook to start, etc.
// } from 'rn-tourguide';
// import Styles from '../views/styles';

// const Test = () => {
//   const {canStart, start, stop, eventEmitter} = useTourGuideController();
//   const handleOnStart = () => console.log('start');
//   const handleOnStop = () => console.log('stop');
//   const handleOnStepChange = () => console.log('stepChange');
//   useEffect(() => {
//     if (canStart) {
//       // 👈 test if you can start otherwise nothing will happen
//       start();
//     }
//   }, [canStart]); // 👈 don't miss it!
//   useEffect(() => {
//     eventEmitter.on('start', handleOnStart);
//     eventEmitter.on('stop', handleOnStop);
//     eventEmitter.on('stepChange', handleOnStepChange);

//     return () => {
//       eventEmitter.off('start', handleOnStart);
//       eventEmitter.off('stop', handleOnStop);
//       eventEmitter.off('stepChange', handleOnStepChange);
//     };
//   }, []);

//   return (
//     <View style={Styles.container}>
//       <TourGuideZone zone={2} text={'hehehe'} borderRadius={16}>
//         <Text style={Styles.title}>{'Welcome to the demo'}</Text>
//       </TourGuideZone>
//       <View style={Styles.container}>
//         <TouchableOpacity style={Styles.button} onPress={() => start()}>
//           <Text style={Styles.buttonText}>Start the Tour</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Test;
