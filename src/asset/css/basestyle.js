import { StyleSheet, Dimensions, Platform } from 'react-native';

// colors
const baseColor    = '#f4f4f4';
const lightColor   = '#fff';
const light100     = '#E5E5E5';
const light200     = '#F6F6F6';
const darkColor    = '#000';
const darkColor200 = '#363636';
const primaryColor = '#045081';
const successColor = '#34A853';
const dangerColor  = '#ea1948';
const warningColor = '#fcbe68';
const disableColor = '#898787';
const gray         = '#F9F9F9';
const gray100      = '#DCDCDC';
const gray200      = '#C0C0C0';
const gray300      = '#696969';
const gray400      = '#575757';
const gray500      = '#f8f9fa';
const gray600      = '#818181';
const blue100      = '#EAF5FF'; 
const goldenrod    = '#daa520'; 
const canvaColorBlue   = '#1e0078'; 
const canvaupperBG   = '#00d1ff'; 
const canvalowerBG   = '#6559ff'; 
const POSBG   = '#61dafb'; 
const MERKLE_HEADER_BG = '#12295d';

const colors = {
  baseColor   : baseColor,
  lightColor  : lightColor,
  light100    : light100,
  light200    : light200,
  primaryColor: primaryColor,
  successColor: successColor,
  darkColor   : darkColor,
  darkColor200: darkColor200,
  dangerColor : dangerColor,
  warningColor: warningColor,
  disableColor: disableColor,
  gray        : gray,
  gray100     : gray100,
  gray200     : gray200,
  gray300     : gray300,
  gray400     : gray400,
  gray500     : gray500,
  gray600     : gray600,
  blue100     : blue100,
  goldenrod   : goldenrod,
  canvaColorBlue   : canvaColorBlue,
  canvaupperBG   : canvaupperBG,
  POSBG   : POSBG,
  MERKLE_HEADER_BG   : MERKLE_HEADER_BG,
};

const PLATFORM = {
  ANDROID: 'android',
  IOS: 'ios',
  MATERIAL: 'material',
  WEB: 'web'
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

const baseWidth = 15;

const custom = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})

// styles
const styles = StyleSheet.create({
  w100: {
    width: '100%'
  },
  w90: {
    width: '90%'
  },
  w85: {
    width: '85%'
  },
  w80: {
    width: '80%'
  },
  w75: {
    width: '75%'
  },
  w70: {
    width: '70%'
  },
  w60: {
    width: '60%'
  },
  w50: {
    width: '50%'
  },
  w55: {
    width: '55%'
  },
  w45: {
    width: '45%'
  },
  w40: {
    width: '40%'
  },
  w35: {
    width: '35%'
  },
  w30: {
    width: '30%'
  },
  w25: {
    width: '25%'
  },
  w20: {
    width: '20%'
  },
  w22: {
    width: '22%'
  },
  w23: {
    width: '23%'
  },
  w15: {
    width: '15%'
  },
  w10: {
    width: '10%'
  },
  w5: {
    width: '5%'
  },
  w100n: {
    width: 100
  },
  w90n: {
    width: 90
  },
  w80n: {
    width: 80
  },
  w130: {
    width: 130
  },
  w105: {
    width: 105
  },
  w110: {
    width: 110
  },
  w115: {
    width: 115
  },
  w150: {
    width: 150
  },
  w70n: {
    width: 70
  },
  w50n: {
    width: 50
  },
  h100: {
    height: '100%'
  },
  h50: {
    height: '50%'
  },
  h40: {
    height: 40
  },
  h5: {
    height: 5
  },
  h90n: {
    height: 90
  },
  h200: {
    height: 200
  },
  m0: {
    margin: 0
  },
  mT5m: {
    marginTop: 5
  },
  m1: {
    margin: baseWidth
  },
  m2: {
    margin: baseWidth * 2
  },
  m3: {
    margin: baseWidth * 3
  },
  m4: {
    margin: baseWidth * 4
  },
  m5: {
    margin: baseWidth * 5
  },
  mTBase3: {
    marginTop: baseWidth/3
  },
  mTHalf: {
    marginTop: baseWidth/2
  },
  mT10: {
    marginTop: 10
  },
  mT1: {
    marginTop: baseWidth
  },
  mT2: {
    marginTop: baseWidth * 2
  },
  mT3: {
    marginTop: baseWidth * 3
  },
  mT4: {
    marginTop: baseWidth * 4
  },
  mT5: {
    marginTop: baseWidth * 5
  },
  mB0: {
    marginBottom: 0
  },
  mB2n: {
    marginBottom: 2
  },
  mB3n: {
    marginBottom: 3
  },
  mB5n: {
    marginBottom: 5
  },
  mB10: {
    marginBottom: 10
  },
  mB15: {
    marginBottom: 15
  },
  mB20: {
    marginBottom: 20
  },
  mB30: {
    marginBottom: 30
  },
  mB40: {
    marginBottom: 40
  },
  mB200: {
    marginBottom: 80
  },
  mB1: {
    marginBottom: baseWidth
  },
  mB2: {
    marginBottom: baseWidth * 2
  },
  mB3: {
    marginBottom: baseWidth * 3
  },
  mB4: {
    marginBottom: baseWidth * 4
  },
  mB5: {
    marginBottom: baseWidth * 5
  },
  mL0: {
    marginLeft: 0
  },
  mLHalf: {
    marginLeft: baseWidth/2
  },
  mL1: {
    marginLeft: baseWidth
  },
  mL2: {
    marginLeft: baseWidth * 2
  },
  mL3: {
    marginLeft: baseWidth * 3
  },
  mL4: {
    marginLeft: baseWidth * 4
  },
  mL5: {
    marginLeft: baseWidth * 5
  },
  mR0: {
    marginRight: 0
  },
  mR1: {
    marginRight: baseWidth
  },
  mR2: {
    marginRight: baseWidth * 2
  },
  mR3: {
    marginRight: baseWidth * 3
  },
  mR4: {
    marginRight: baseWidth * 4
  },
  mR5: {
    marginRight: baseWidth * 5
  },
  mR10: {
    marginRight: 10
  },
  mRhalf: {
    marginRight: baseWidth * 0.5
  },
  mXHalf: {
    marginLeft: baseWidth / 2,
    marginRight: baseWidth / 2
  },
  mX10: {
    marginLeft: 10,
    marginRight: 10
  },
  mX1_2: {
    marginLeft: baseWidth /2,
    marginRight: baseWidth /2
  },
  mX1: {
    marginLeft: baseWidth,
    marginRight: baseWidth
  },
  mX2: {
    marginLeft: baseWidth * 2,
    marginRight: baseWidth * 2
  },
  mX3: {
    marginLeft: baseWidth * 3,
    marginRight: baseWidth * 3
  },
  mX4: {
    marginLeft: baseWidth * 4,
    marginRight: baseWidth * 4
  },
  mX5: {
    marginLeft: baseWidth * 5,
    marginRight: baseWidth * 5
  },
  mAuto:{
    margin:'auto'
  },
  mYAuto: {
    marginBottom: 'auto',
    marginTop: 'auto'
  },
  mYHalf: {
    marginBottom: baseWidth/2,
    marginTop:  baseWidth/2
  },
  mY1: {
    marginTop: baseWidth,
    marginBottom: baseWidth
  },
  mY2: {
    marginTop: baseWidth * 2,
    marginBottom: baseWidth * 2
  },
  mY3: {
    marginTop: baseWidth * 3,
    marginBottom: baseWidth * 3
  },
  mY4: {
    marginTop: baseWidth * 4,
    marginBottom: baseWidth * 4
  },
  mY5: {
    marginTop: baseWidth * 5,
    marginBottom: baseWidth * 5
  },
  p0: {
    padding: 0
  },
  p13: {
    padding: baseWidth /3
  },
  p1: {
    padding: baseWidth
  },
  pOneAndHalf: {
    padding: baseWidth * 1.5
  },
  p2: {
    padding: baseWidth * 2
  },
  p3: {
    padding: baseWidth * 3
  },
  p4: {
    padding: baseWidth * 4
  },
  p5: {
    padding: baseWidth * 5
  },
  pLHalf: {
    paddingLeft: baseWidth/2
  },
  pL1: {
    paddingLeft: baseWidth
  },
  pL2: {
    paddingLeft: baseWidth * 2
  },
  pL3: {
    paddingLeft: baseWidth * 3
  },
  pL4: {
    paddingLeft: baseWidth * 4
  },
  pL5: {
    paddingLeft: baseWidth * 5
  },
  pRHalf: {
    paddingRight: baseWidth/2
  },
  pR1: {
    paddingRight: baseWidth
  },
  pR1half: {
    paddingRight: baseWidth * 1.5
  },
  pR2: {
    paddingRight: baseWidth * 2
  },
  pR3: {
    paddingRight: baseWidth * 3
  },
  pR4: {
    paddingRight: baseWidth * 4
  },
  pR5: {
    paddingRight: baseWidth * 5
  },
  pX0: {
    paddingLeft: 0,
    paddingRight: 0
  },
  pH5: {
    paddingLeft: baseWidth / 3,
    paddingRight: baseWidth / 3
  },
  pXHalf: {
    paddingLeft: baseWidth / 2,
    paddingRight: baseWidth / 2
  },
  pX1: {
    paddingLeft: baseWidth,
    paddingRight: baseWidth
  },
  pX1half: {
    paddingLeft: baseWidth *1.5,
    paddingRight: baseWidth *1.5
  },
  pX2: {
    paddingLeft: baseWidth * 2,
    paddingRight: baseWidth * 2
  },
  pX3: {
    paddingLeft: baseWidth * 3,
    paddingRight: baseWidth * 3
  },
  pX4: {
    paddingLeft: baseWidth * 4,
    paddingRight: baseWidth * 4
  },
  pX5: {
    paddingLeft: baseWidth * 5,
    paddingRight: baseWidth * 5
  },
  pX6: {
    paddingLeft: baseWidth * 6,
    paddingRight: baseWidth * 6
  },
  pX7: {
    paddingLeft: baseWidth * 7,
    paddingRight: baseWidth * 7
  },
  pX8: {
    paddingLeft: baseWidth * 8,
    paddingRight: baseWidth * 8
  },
  pX9: {
    paddingLeft: baseWidth * 9,
    paddingRight: baseWidth * 9
  },
  pX10: {
    paddingLeft: baseWidth * 10,
    paddingRight: baseWidth * 10
  },
  pX3n: {
    paddingRight: 3,
    paddingLeft: 3
  },
  pYAuto: {
    paddingTop: 'auto',
    paddingBottom: 'auto'
  },
  pY4m: {
    paddingTop: 4,
    paddingBottom: 4
  },
  pYhalf: {
    paddingTop: baseWidth / 2,
    paddingBottom: baseWidth / 2
  },
  pY0: {
    paddingTop: 0,
    paddingBottom: 0
  },
  pY1third: {
    paddingTop: baseWidth * 0.1,
    paddingBottom: baseWidth * 0.1
  },
  pY1: {
    paddingTop: baseWidth,
    paddingBottom: baseWidth
  },
  pYmini: {
  paddingHorizontal:'10%'
  },
  pY1half: {
    paddingTop: baseWidth * 1.5,
    paddingBottom: baseWidth * 1.5
  },
  pY2: {
    paddingTop: baseWidth * 2,
    paddingBottom: baseWidth * 2
  },
  pY3: {
    paddingTop: baseWidth * 3,
    paddingBottom: baseWidth * 3
  },
  pH10: {
    paddingHorizontal: 10
  },
  pH20: {
    paddingHorizontal: 20
  },
  pH30: {
    paddingHorizontal: 30
  },
  pH40: {
    paddingHorizontal: 40
  },
  pH50: {
    paddingHorizontal: 50
  },
  pH60: {
    paddingHorizontal: 60
  },
  pH70: {
    paddingHorizontal: 70
  },
  pV10:{
    paddingVertical:10
  },
  pV20:{
    paddingVertical:20
  },
  pV30:{
    paddingVertical:30
  },
  pV40:{
    paddingVertical:40
  },
  pV50:{
    paddingVertical:50
  },
  pV60:{
    paddingVertical:60
  },
  border5:{
    borderRadius: 5
  },
  border10:{
    borderRadius: 10
  },
  border15:{
    borderRadius: 15
  },
  border20:{
    borderRadius: 20
  },
  border25:{
    borderRadius: 25
  },
  pY2_5: {
    paddingTop: baseWidth * 2.5,
    paddingBottom: baseWidth * 2.5
  },
  pY4: {
    paddingTop: baseWidth * 4,
    paddingBottom: baseWidth * 4
  },
  pY5: {
    paddingTop: baseWidth * 5,
    paddingBottom: baseWidth * 5
  },
  pBhalf: {
    paddingBottom: baseWidth * 0.5
  },
  pY10: {
    paddingTop: 10,
    paddingBottom: 10
  },
  pY100: {
    paddingTop: 100,
    paddingBottom: 100
  },
  pY3n: {
    paddingTop: 3,
    paddingBottom: 3
  },
  pB0: {
    paddingBottom: 0
  },
  pB1: {
    paddingBottom: baseWidth
  },
  pB2: {
    paddingBottom: baseWidth * 2
  },
  pB3: {
    paddingBottom: baseWidth * 3
  },
  pB4: {
    paddingBottom: baseWidth * 4
  },
  pB5: {
    paddingBottom: baseWidth * 5
  },
  pB10: {
    paddingBottom: 10
  },
  pT0: {
    paddingTop: 0
  },
  pT1: {
    paddingTop: baseWidth
  },
  pT2: {
    paddingTop: baseWidth * 2
  },
  pT3: {
    paddingTop: baseWidth * 3
  },
  pT4: {
    paddingTop: baseWidth * 4
  },
  pT5: {
    paddingTop: baseWidth * 5
  },
  pT5n: {
    paddingTop: 5
  },
  pB5n: {
    paddingBottom: 5
  },
  pT10: {
    paddingTop: 10
  },
  pY8m: {
    paddingTop: 8,
    paddingBottom: 8
  },
  pT1half: {
    paddingTop: baseWidth * 1.5
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  centerItems: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyStart: {
    justifyContent: 'flex-start'
  },
  alignCenter: {
    alignItems: 'center'
  },
  alignFlexStart: {
    alignItems: 'flex-start'
  },
  alignFlexEnd: {
    alignItems: 'flex-end'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  justifySpaceAround: {
    justifyContent: 'space-around'
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end'
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexWrap: {
    flex: 1,
    flexWrap: 'wrap'
  },
  flexEnd: {
    alignSelf: 'flex-end'
  },
  flexSelfCenter: {
    alignSelf: 'center'
  },
  flexHalf: {
    flex: 1/2
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flexCol: {
    flexDirection: 'column'
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  },
  textUppercase: {
    textTransform: 'uppercase'
  },
  textCapitalize: {
    textTransform: 'capitalize'
  },
  textLowercase: {
    textTransform: 'lowercase'
  },
  textBold: {
    fontWeight: 'bold'
  },
  textWeight800: {
    fontWeight: '800'
  },
  textWeight600: {
    fontWeight: '600'
  },
  textWeight500: {
    fontWeight: '500'
  },
  textWeight300: {
    fontWeight: '300'
  },
  textWeight100: {
    fontWeight: '100'
  },
  textWhite: {
    color: lightColor
  },
  textGray: {
    color: disableColor
  },
  textGray300: {
    color: gray300
  },
  textGray400: {
    color: gray400
  },
  textGray600: {
    color: gray600
  },
  textPrimary: {
    color: primaryColor
  },
  textSuccess: {
    color: successColor
  },
  textDanger: {
    color: dangerColor
  },
  textWarning: {
    color: warningColor
  },
  textDark: {
    color: darkColor
  },
  textDark200: {
    color: darkColor200
  },
  textLightBlue: {
    color: '#6cb2eb'
  },
  textSubtitle: {
    fontSize: 12
  },
  textJustify: {
    textAlign: 'justify'
  },
  textMini: {
    fontSize: 9
  },
  textError: {
    color: dangerColor,
    fontSize: 12
  },
  backgroundCanvaColorBlue: {
    backgroundColor: canvaColorBlue
  },
  backgroundLightBlue: {
    backgroundColor: canvaupperBG
  },
  backgroundPrimary: {
    backgroundColor: primaryColor
  },
  backgroundWhite:{
    backgroundColor: 'white'
  },
  backgroundGray: {
    backgroundColor: gray
  },
  backgroundGray500: {
    backgroundColor: gray500
  },
  bgTransparent: {
    backgroundColor: 'transparent'
  },
  bgBase: {
    backgroundColor: baseColor
  },
  bgDanger: {
    backgroundColor: dangerColor
  },
  bgSuccess: {
    backgroundColor: successColor
  },
  bgDarkGray: {
    backgroundColor: '#6c757d'
  },
  bgDark:{
    backgroundColor: "black"
  },
  bgWarning: {
    backgroundColor: warningColor
  },
  bgGray: {
    backgroundColor: gray
  },
  bgDisable: {
    backgroundColor: colors.disableColor
  },
  bgGray100: {
    backgroundColor: gray100
  },
  bgGray200: {
    backgroundColor: gray200
  },
  bgGray300: {
    backgroundColor: gray300
  },
  bgLight: {
    backgroundColor: lightColor
  },
  bgLight100: {
    backgroundColor: light100
  },
  bgLight200: {
    backgroundColor: light200
  },
  bgLightBlue: {
    backgroundColor: '#6cb2eb'
  },
  bgBlue100: {
    backgroundColor: colors.blue100
  },
  textUnderline: {
    textDecorationLine: 'underline'
  },
  textLineThrough: {
    textDecorationLine: 'line-through'
  },
  font9: {
    fontSize: 9
  },
  font10: {
    fontSize: 10
  },
  font11: {
    fontSize: 11
  },
  font12: {
    fontSize: 12
  },
  font13: {
    fontSize: 13
  },
  font14: {
    fontSize: 14
  },
  font15: {
    fontSize: 15
  },
  font16: {
    fontSize: 16
  },
  font17: {
    fontSize: 17
  },
  font18: {
    fontSize: 18
  },
  font19: {
    fontSize: 19
  },
  font20: {
    fontSize: 20
  },
  font22: {
    fontSize: 22
  },
  font25: {
    fontSize: 25
  },
  font30: {
    fontSize: baseWidth * 2
  },
  font40: {
    fontSize: 40
  },
  font50: {
    fontSize: 50
  },
  font60: {
    fontSize: 60
  },
  font70: {
    fontSize: 70
  },
  font80: {
    fontSize: 80
  },
  rounded: {
    borderRadius: baseWidth / 3
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  homeLoading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: deviceHeight / 12,
    bottom: 0,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  borderRadius25: { 
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  border25: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  bordered: {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  borderedNoRadius: {
    borderColor: 'black',
    borderWidth: 2,
  },
  flexShrink: {
    flexShrink: 1,
    marginTop:'auto',
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: baseWidth * 1
  },
  borderTranparent: {
    borderColor: 'transparent'
  },
  displayNone:{
    display:"none"
  }
});

export {
  styles, colors, deviceHeight, deviceWidth, baseWidth, PLATFORM, isIphoneX, custom };