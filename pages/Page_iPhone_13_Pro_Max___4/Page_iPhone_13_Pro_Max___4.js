import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Rectangle_19_link} from './assets/imageLinks.js'
import {image_Rectangle_20_link} from './assets/imageLinks.js'
import {image_Rectangle_21_link} from './assets/imageLinks.js'
import {image_Rectangle_22_link} from './assets/imageLinks.js'
import {image_Rectangle_24_link} from './assets/imageLinks.js'
import {image_Rectangle_25_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___4  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Group_1321}    >
				<View style = {noneModeStyles._Frame_56}    >
					<View style = {noneModeStyles._Rectangle_16}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart}    >
				<View style = {noneModeStyles.style5}    >
					<View style = {noneModeStyles.style6}   >
						<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
							<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1.26667 19H18.3667C18.5346 19 18.6957 18.9333 18.8145 18.8145C18.9333 18.6957 19 18.5346 19 18.3667C19 18.1987 18.9333 18.0376 18.8145 17.9188C18.6957 17.8001 18.5346 17.7333 18.3667 17.7333H1.26667V0.633333C1.26667 0.465363 1.19994 0.304272 1.08117 0.185499C0.962395 0.066726 0.801304 0 0.633333 0C0.465363 0 0.304272 0.066726 0.185499 0.185499C0.066726 0.304272 0 0.465363 0 0.633333V17.7333C0 18.0693 0.133452 18.3915 0.370998 18.629C0.608544 18.8665 0.930726 19 1.26667 19ZM3.95833 16.4667H5.54167C5.9196 16.4667 6.28205 16.3165 6.54929 16.0493C6.81653 15.7821 6.96667 15.4196 6.96667 15.0417V9.025C6.96667 8.64707 6.81653 8.28461 6.54929 8.01737C6.28205 7.75013 5.9196 7.6 5.54167 7.6H3.95833C3.5804 7.6 3.21795 7.75013 2.95071 8.01737C2.68347 8.28461 2.53333 8.64707 2.53333 9.025V15.0417C2.53333 15.4196 2.68347 15.7821 2.95071 16.0493C3.21795 16.3165 3.5804 16.4667 3.95833 16.4667ZM11.2417 16.4667H9.65833C9.2804 16.4667 8.91795 16.3165 8.65071 16.0493C8.38347 15.7821 8.23333 15.4196 8.23333 15.0417V7.125C8.23333 6.74707 8.38347 6.38461 8.65071 6.11737C8.91795 5.85013 9.2804 5.7 9.65833 5.7H11.2417C11.6196 5.7 11.9821 5.85013 12.2493 6.11737C12.5165 6.38461 12.6667 6.74707 12.6667 7.125V15.0417C12.6667 15.4196 12.5165 15.7821 12.2493 16.0493C11.9821 16.3165 11.6196 16.4667 11.2417 16.4667ZM15.3441 16.4667H16.9274C17.3054 16.4667 17.6678 16.3165 17.9351 16.0493C18.2023 15.7821 18.3524 15.4196 18.3524 15.0417V4.59167C18.3524 4.21373 18.2023 3.85128 17.9351 3.58404C17.6678 3.3168 17.3054 3.16667 16.9274 3.16667H15.3441C14.9662 3.16667 14.6037 3.3168 14.3365 3.58404C14.0692 3.85128 13.9191 4.21373 13.9191 4.59167V15.0417C13.9191 15.4196 14.0692 15.7821 14.3365 16.0493C14.6037 16.3165 14.9662 16.4667 15.3441 16.4667Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart_2}    >
				<View style = {noneModeStyles.style8}    >
					<View style = {noneModeStyles.style9}   >
						<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
							<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1.26667 19H18.3667C18.5346 19 18.6957 18.9333 18.8145 18.8145C18.9333 18.6957 19 18.5346 19 18.3667C19 18.1987 18.9333 18.0376 18.8145 17.9188C18.6957 17.8001 18.5346 17.7333 18.3667 17.7333H1.26667V0.633333C1.26667 0.465363 1.19994 0.304272 1.08117 0.185499C0.962395 0.066726 0.801304 0 0.633333 0C0.465363 0 0.304272 0.066726 0.185499 0.185499C0.066726 0.304272 0 0.465363 0 0.633333V17.7333C0 18.0693 0.133452 18.3915 0.370998 18.629C0.608544 18.8665 0.930726 19 1.26667 19ZM3.95833 16.4667H5.54167C5.9196 16.4667 6.28205 16.3165 6.54929 16.0493C6.81653 15.7821 6.96667 15.4196 6.96667 15.0417V9.025C6.96667 8.64707 6.81653 8.28461 6.54929 8.01737C6.28205 7.75013 5.9196 7.6 5.54167 7.6H3.95833C3.5804 7.6 3.21795 7.75013 2.95071 8.01737C2.68347 8.28461 2.53333 8.64707 2.53333 9.025V15.0417C2.53333 15.4196 2.68347 15.7821 2.95071 16.0493C3.21795 16.3165 3.5804 16.4667 3.95833 16.4667ZM11.2417 16.4667H9.65833C9.2804 16.4667 8.91795 16.3165 8.65071 16.0493C8.38347 15.7821 8.23333 15.4196 8.23333 15.0417V7.125C8.23333 6.74707 8.38347 6.38461 8.65071 6.11737C8.91795 5.85013 9.2804 5.7 9.65833 5.7H11.2417C11.6196 5.7 11.9821 5.85013 12.2493 6.11737C12.5165 6.38461 12.6667 6.74707 12.6667 7.125V15.0417C12.6667 15.4196 12.5165 15.7821 12.2493 16.0493C11.9821 16.3165 11.6196 16.4667 11.2417 16.4667ZM15.3441 16.4667H16.9274C17.3054 16.4667 17.6678 16.3165 17.9351 16.0493C18.2023 15.7821 18.3524 15.4196 18.3524 15.0417V4.59167C18.3524 4.21373 18.2023 3.85128 17.9351 3.58404C17.6678 3.3168 17.3054 3.16667 16.9274 3.16667H15.3441C14.9662 3.16667 14.6037 3.3168 14.3365 3.58404C14.0692 3.85128 13.9191 4.21373 13.9191 4.59167V15.0417C13.9191 15.4196 14.0692 15.7821 14.3365 16.0493C14.6037 16.3165 14.9662 16.4667 15.3441 16.4667Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_1313}    >
				<View style = {noneModeStyles._Wifi___24___Outline}    >
					<View style = {noneModeStyles.style12}    >
						<View style = {noneModeStyles.style13}   >
							<Svg style={{height: 17, width: 20}} viewBox = "0 0 20 17">
								<Path fill = {"white"}     d = "M9.99923 11.0104C9.45513 11.0104 8.92324 11.1718 8.47083 11.4741C8.01842 11.7764 7.66581 12.206 7.45759 12.7087C7.24937 13.2114 7.19489 13.7645 7.30104 14.2982C7.40719 14.8318 7.66921 15.322 8.05395 15.7068C8.43869 16.0915 8.92888 16.3535 9.46253 16.4597C9.99618 16.5658 10.5493 16.5113 11.052 16.3031C11.5547 16.0949 11.9844 15.7423 12.2866 15.2899C12.5889 14.8375 12.7503 14.3056 12.7503 13.7615C12.7503 13.0319 12.4604 12.3321 11.9445 11.8162C11.4286 11.3003 10.7289 11.0104 9.99923 11.0104ZM9.99923 14.6785C9.81786 14.6785 9.64057 14.6247 9.48977 14.524C9.33896 14.4232 9.22143 14.28 9.15202 14.1124C9.08261 13.9448 9.06445 13.7605 9.09984 13.5826C9.13522 13.4047 9.22256 13.2413 9.3508 13.1131C9.47905 12.9848 9.64245 12.8975 9.82033 12.8621C9.99822 12.8267 10.1826 12.8449 10.3502 12.9143C10.5177 12.9837 10.6609 13.1012 10.7617 13.252C10.8625 13.4028 10.9162 13.5801 10.9162 13.7615C10.9162 14.0047 10.8196 14.2379 10.6477 14.4099C10.4757 14.5819 10.2424 14.6785 9.99923 14.6785ZM9.99923 7.34237C8.29793 7.34823 6.6673 8.02354 5.46 9.22225C5.28921 9.39406 5.19334 9.62648 5.19334 9.86875C5.19334 10.111 5.28921 10.3434 5.46 10.5152C5.63182 10.686 5.86424 10.7819 6.1065 10.7819C6.34876 10.7819 6.58118 10.686 6.75299 10.5152C7.17891 10.0883 7.68488 9.74948 8.24192 9.51833C8.79896 9.28718 9.39614 9.1682 9.99923 9.1682C10.6023 9.1682 11.1995 9.28718 11.7565 9.51833C12.3136 9.74948 12.8196 10.0883 13.2455 10.5152C13.4148 10.688 13.6455 10.7869 13.8874 10.7903C14.0734 10.8011 14.2583 10.7548 14.4175 10.6578C14.5766 10.5608 14.7024 10.4176 14.7781 10.2473C14.8538 10.077 14.8758 9.88766 14.8411 9.70453C14.8065 9.52141 14.7169 9.35318 14.5843 9.22225C13.9809 8.62317 13.2655 8.14881 12.4788 7.82625C11.692 7.5037 10.8495 7.33927 9.99923 7.34237ZM9.99923 3.6743C7.3252 3.68141 4.76176 4.74237 2.86484 6.62709C2.77934 6.71259 2.71152 6.8141 2.66525 6.92581C2.61897 7.03752 2.59516 7.15726 2.59516 7.27817C2.59516 7.52238 2.69217 7.75658 2.86484 7.92926C3.03752 8.10193 3.27172 8.19894 3.51593 8.19894C3.76013 8.19894 3.99433 8.10193 4.16701 7.92926C5.71448 6.38371 7.81214 5.51559 9.99923 5.51559C12.1863 5.51559 14.284 6.38371 15.8315 7.92926C15.9171 8.01425 16.0188 8.08149 16.1305 8.12712C16.2422 8.17276 16.3619 8.19589 16.4825 8.19519C16.6032 8.19589 16.7229 8.17276 16.8346 8.12712C16.9463 8.08149 17.0479 8.01425 17.1336 7.92926C17.2196 7.84401 17.2878 7.74258 17.3343 7.63084C17.3809 7.51909 17.4049 7.39923 17.4049 7.27817C17.4049 7.15712 17.3809 7.03726 17.3343 6.92551C17.2878 6.81376 17.2196 6.71234 17.1336 6.62709C15.2367 4.74237 12.6733 3.68141 9.99923 3.6743ZM19.7288 4.03194C18.4514 2.75371 16.9346 1.73972 15.2652 1.0479C13.5957 0.356082 11.8063 0 9.99923 0C8.19213 0 6.40273 0.356082 4.73329 1.0479C3.06385 1.73972 1.54709 2.75371 0.269687 4.03194C0.0970092 4.20461 0 4.43882 0 4.68302C0 4.92722 0.0970092 5.16142 0.269687 5.3341C0.442364 5.50678 0.676566 5.60379 0.920769 5.60379C1.16497 5.60379 1.39917 5.50678 1.57185 5.3341C3.80733 3.09978 6.8386 1.84465 9.99923 1.84465C13.1599 1.84465 16.1911 3.09978 18.4266 5.3341C18.5119 5.42005 18.6133 5.48827 18.725 5.53483C18.8368 5.58138 18.9566 5.60535 19.0777 5.60535C19.1988 5.60535 19.3186 5.58138 19.4304 5.53483C19.5421 5.48827 19.6435 5.42005 19.7288 5.3341C19.8147 5.24885 19.8829 5.14743 19.9295 5.03568C19.9761 4.92393 20 4.80408 20 4.68302C20 4.56196 19.9761 4.4421 19.9295 4.33035C19.8829 4.21861 19.8147 4.11718 19.7288 4.03194Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._battery_charging}    >
				<View style = {noneModeStyles.style15}    >
					<View style = {noneModeStyles.style16}   >
						<Svg style={{height: 11, width: 21}} viewBox = "0 0 21 11">
							<Path fill = {"white"}     d = "M1.375 8.34883V2.65117C1.37545 2.31285 1.51005 1.98851 1.74928 1.74928C1.98851 1.51005 2.31285 1.37545 2.65117 1.375H8.5568L9.60523 0H2.65117C1.94828 0.00079609 1.27441 0.280371 0.77739 0.77739C0.280371 1.27441 0.00079609 1.94828 0 2.65117V8.34883C0.00079609 9.05172 0.280371 9.72559 0.77739 10.2226C1.27441 10.7196 1.94828 10.9992 2.65117 11H6.8127C6.79927 10.8952 6.80304 10.789 6.82387 10.6855L6.83031 10.6532L6.83934 10.6219L7.11863 9.625H2.65117C2.31285 9.62455 1.98851 9.48995 1.74928 9.25072C1.51005 9.01149 1.37545 8.68715 1.375 8.34883Z"/>
							<Path fill = {"white"}     d = "M15.9113 0H11.6729C11.6855 0.103085 11.6816 0.207526 11.6613 0.309375L11.6548 0.341172L11.6458 0.372539L11.3648 1.375H15.9113C16.2497 1.37545 16.574 1.51005 16.8132 1.74928C17.0524 1.98851 17.187 2.31285 17.1875 2.65117V8.34883C17.187 8.68715 17.0524 9.01149 16.8132 9.25072C16.574 9.48995 16.2497 9.62455 15.9113 9.625H9.92578L8.87648 11H15.9113C16.6142 10.9992 17.2881 10.7196 17.7851 10.2226C18.2821 9.72559 18.5617 9.05172 18.5625 8.34883V2.65117C18.5617 1.94828 18.2821 1.27441 17.7851 0.77739C17.2881 0.280371 16.6142 0.00079609 15.9113 0Z"/>
							<Path fill = {"white"}     d = "M6.30137 7.13969C6.11073 7.13973 5.9237 7.08772 5.76045 6.98929C5.59719 6.89085 5.4639 6.74971 5.37496 6.58109C5.28295 6.40812 5.24 6.21328 5.25075 6.01765C5.26151 5.82202 5.32556 5.63306 5.43598 5.47121L5.4493 5.45145L5.46348 5.43254L7.80398 2.36328H3.16637C2.93845 2.36328 2.71986 2.45382 2.5587 2.61499C2.39753 2.77615 2.30699 2.99474 2.30699 3.22266V7.77734C2.30699 8.00526 2.39753 8.22385 2.5587 8.38501C2.71986 8.54618 2.93845 8.63672 3.16637 8.63672H7.39535L7.81559 7.13883L6.30137 7.13969Z"/>
							<Path fill = {"white"}     d = "M12.338 5.04453C12.3544 5.01965 12.3657 4.99175 12.3711 4.96246C12.3729 4.95309 12.3741 4.94362 12.3746 4.9341C12.3758 4.91555 12.3747 4.89692 12.3711 4.87867C12.3661 4.85202 12.3562 4.82652 12.3419 4.80348C12.3326 4.78848 12.3213 4.77476 12.3084 4.76266C12.302 4.75662 12.2951 4.75115 12.2878 4.74633C12.2732 4.73602 12.2571 4.72805 12.2401 4.7227C12.2219 4.71693 12.2029 4.71403 12.1838 4.7141H9.53605L10.4625 1.41109L10.4844 1.33203L10.8191 0.139219C10.8204 0.13141 10.8212 0.123508 10.8212 0.115586C10.8212 0.113008 10.8212 0.110859 10.8212 0.108711C10.8212 0.106562 10.8213 0.0975388 10.8191 0.0923825C10.817 0.0872263 10.8191 0.0885154 10.8191 0.0863669C10.8174 0.079674 10.8149 0.0731901 10.8118 0.0670311C10.8084 0.0612189 10.8047 0.0556222 10.8006 0.0502733L10.7968 0.0459769C10.7934 0.0424628 10.7898 0.0391617 10.786 0.0360936L10.7817 0.032656C10.7764 0.0288152 10.7708 0.025369 10.765 0.0223439C10.7593 0.0197067 10.7534 0.0176897 10.7473 0.0163283H10.722C10.7156 0.0156963 10.7091 0.0156963 10.7027 0.0163283C10.6964 0.0177608 10.6904 0.0199239 10.6846 0.0227734L10.679 0.0257815L10.6661 0.0348046L10.6614 0.0391017C10.6556 0.044367 10.6504 0.0502777 10.6459 0.0567191L9.30789 1.81199L8.88465 2.36328L6.14711 5.95332C6.1399 5.96426 6.13358 5.97575 6.1282 5.9877C6.12133 6.00265 6.11628 6.01837 6.11316 6.03453C6.10947 6.05276 6.10831 6.07141 6.10973 6.08996C6.11117 6.12128 6.11964 6.15187 6.13451 6.17947C6.14939 6.20707 6.17029 6.23096 6.19566 6.24938C6.2031 6.25432 6.21085 6.25877 6.21887 6.2627C6.24418 6.27494 6.27196 6.28126 6.30008 6.28117H8.94781L7.66648 10.8539C7.66587 10.8619 7.66587 10.87 7.66648 10.878C7.66648 10.878 7.66648 10.8823 7.66648 10.8844C7.66689 10.8899 7.66775 10.8954 7.66906 10.9007C7.66882 10.9027 7.66882 10.9048 7.66906 10.9068C7.67078 10.9135 7.67323 10.9199 7.67637 10.9261C7.67974 10.9318 7.68347 10.9372 7.68754 10.9424L7.69141 10.9467L7.70215 10.957C7.70376 10.9579 7.70521 10.9591 7.70645 10.9605C7.71168 10.9643 7.7173 10.9676 7.7232 10.9704C7.72891 10.9728 7.7348 10.9748 7.74082 10.9764H7.74641C7.75112 10.9768 7.75587 10.9768 7.76059 10.9764H7.76617C7.77269 10.9761 7.77916 10.9753 7.78551 10.9738C7.79161 10.9721 7.79752 10.9698 7.80313 10.9669L7.80871 10.9639L7.8216 10.9549L7.82633 10.951C7.83214 10.9457 7.83733 10.9398 7.8418 10.9334L8.84383 9.625L12.338 5.04453Z"/>
							<Path fill = {"white"}     d = "M13.041 5.53996L13.0213 5.56574L10.6782 8.63672H15.3961C15.6241 8.63672 15.8426 8.54618 16.0038 8.38501C16.165 8.22385 16.2555 8.00526 16.2555 7.77734V3.22266C16.2555 2.99474 16.165 2.77615 16.0038 2.61499C15.8426 2.45382 15.6241 2.36328 15.3961 2.36328H11.0881L10.6696 3.85559H12.1838C12.3726 3.85536 12.558 3.90624 12.7203 4.00284C12.8826 4.09945 13.0157 4.23817 13.1055 4.4043C13.1988 4.57574 13.2441 4.76923 13.2366 4.96429C13.229 5.15936 13.1688 5.34876 13.0625 5.51246L13.041 5.53996Z"/>
							<Path fill = {"white"}     d = "M19.9375 3.20848C19.7552 3.20848 19.5803 3.28091 19.4514 3.40984C19.3224 3.53877 19.25 3.71364 19.25 3.89598V7.10402C19.25 7.28636 19.3224 7.46123 19.4514 7.59016C19.5803 7.71909 19.7552 7.79152 19.9375 7.79152C20.1198 7.79152 20.2947 7.71909 20.4236 7.59016C20.5526 7.46123 20.625 7.28636 20.625 7.10402V3.89598C20.625 3.71364 20.5526 3.53877 20.4236 3.40984C20.2947 3.28091 20.1198 3.20848 19.9375 3.20848Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._SWM_icons___outline___speaker_2}    >
				<View style = {noneModeStyles.style18}    >
					<View style = {noneModeStyles.style19}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.5} d = "M12.6667 6.24999C13.125 6.70832 13.5833 7.62499 13.5833 8.99999C13.5833 10.375 13.125 11.2917 12.6667 11.75M15.4167 3.5C16.7917 4.875 17.25 7.16667 17.25 8.99999C17.25 10.8333 16.7917 13.125 15.4167 14.5M9.91667 0.75L4.41667 5.33333H2.58333C1.57081 5.33333 0.75 6.15414 0.75 7.16667V10.8333C0.75 11.8459 1.57081 12.6667 2.58333 12.6667H4.41667L9.91667 17.25V0.75Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._4_05_pm}   >
				4:05 pm
			</Text>
			<View style = {noneModeStyles._Rectangle_17}    >
			</View>
			<Text style = {noneModeStyles._Come___Fit}   >
				Come & Fit
			</Text>
			<Text style = {noneModeStyles._Active_Living}   >
				Active Living
			</Text>
			<View style = {noneModeStyles._Rectangle_19_container}    >
				<View style = {noneModeStyles._Rectangle_19}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_19_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_20_container}    >
				<View style = {noneModeStyles._Rectangle_20}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_20_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_21_container}    >
				<View style = {noneModeStyles._Rectangle_21}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_21_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_22_container}    >
				<View style = {noneModeStyles._Rectangle_22}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_22_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Chest_Training}   >
				Chest Training
			</Text>
			<Text style = {noneModeStyles._Back_Training}   >
				Back Training
			</Text>
			<View style = {noneModeStyles._Line_3}    >
			</View>
			<View style = {noneModeStyles._Rectangle_23}    >
			</View>
			<View style = {noneModeStyles._Group_1318}    >
				<View style = {noneModeStyles._account___24___Outline}    >
					<View style = {noneModeStyles.style38}    >
						<View style = {noneModeStyles.style39}   >
							<Svg style={{height: 35, width: 35}} viewBox = "0 0 35 35">
								<Path fill = {"black"}     d = "M22.4175 17.99C23.5252 16.8004 24.1492 15.2404 24.1675 13.615C24.1675 11.8606 23.4706 10.178 22.23 8.93749C20.9895 7.69694 19.3069 7 17.5525 7C15.7981 7 14.1155 7.69694 12.875 8.93749C11.6344 10.178 10.9375 11.8606 10.9375 13.615C10.9558 15.2404 11.5798 16.8004 12.6875 17.99C11.1451 18.758 9.81789 19.8974 8.8251 21.3056C7.83232 22.7138 7.20515 24.3468 7 26.0575C6.94895 26.5216 7.08436 26.987 7.37645 27.3513C7.66853 27.7156 8.09337 27.9489 8.5575 28C9.02163 28.0511 9.48703 27.9156 9.85132 27.6236C10.2156 27.3315 10.4489 26.9066 10.5 26.4425C10.7088 24.747 11.5305 23.1864 12.8102 22.0546C14.0898 20.9229 15.7392 20.2982 17.4475 20.2982C19.1558 20.2982 20.8052 20.9229 22.0849 22.0546C23.3645 23.1864 24.1862 24.747 24.395 26.4425C24.4437 26.8912 24.6638 27.3038 25.0095 27.594C25.3552 27.8843 25.7996 28.0297 26.25 28H26.4425C26.9012 27.9472 27.3205 27.7153 27.609 27.3547C27.8974 26.9941 28.0317 26.5341 27.9825 26.075C27.7926 24.3733 27.1852 22.7448 26.2143 21.3343C25.2435 19.9239 23.9392 18.775 22.4175 17.99ZM17.5 16.73C16.8839 16.73 16.2817 16.5473 15.7694 16.205C15.2571 15.8627 14.8579 15.3763 14.6221 14.8071C14.3864 14.2379 14.3247 13.6115 14.4449 13.0073C14.565 12.403 14.8617 11.848 15.2974 11.4124C15.733 10.9767 16.288 10.68 16.8923 10.5599C17.4965 10.4397 18.1229 10.5013 18.6921 10.7371C19.2613 10.9729 19.7477 11.3721 20.09 11.8844C20.4323 12.3967 20.615 12.9989 20.615 13.615C20.615 14.4412 20.2868 15.2335 19.7026 15.8176C19.1185 16.4018 18.3262 16.73 17.5 16.73ZM29.75 0H5.25C3.85761 0 2.52226 0.553124 1.53769 1.53769C0.553124 2.52226 0 3.85761 0 5.25V29.75C0 31.1424 0.553124 32.4777 1.53769 33.4623C2.52226 34.4469 3.85761 35 5.25 35H29.75C31.1424 35 32.4777 34.4469 33.4623 33.4623C34.4469 32.4777 35 31.1424 35 29.75V5.25C35 3.85761 34.4469 2.52226 33.4623 1.53769C32.4777 0.553124 31.1424 0 29.75 0ZM31.5 29.75C31.5 30.2141 31.3156 30.6593 30.9874 30.9874C30.6593 31.3156 30.2141 31.5 29.75 31.5H5.25C4.78587 31.5 4.34075 31.3156 4.01256 30.9874C3.68438 30.6593 3.5 30.2141 3.5 29.75V5.25C3.5 4.78587 3.68438 4.34075 4.01256 4.01256C4.34075 3.68438 4.78587 3.5 5.25 3.5H29.75C30.2141 3.5 30.6593 3.68438 30.9874 4.01256C31.3156 4.34075 31.5 4.78587 31.5 5.25V29.75Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_1281}    >
				<View style = {noneModeStyles._debit_card_card_atm_card_credit_card__1}    >
					<View style = {noneModeStyles.style42}    >
						<View style = {noneModeStyles.style43}   >
							<Svg style={{height: 27, width: 35}} viewBox = "0 0 35 27">
								<Path fill = {"black"}     d = "M0 21C0 23.975 2.275 26.25 5.25 26.25H29.75C32.725 26.25 35 23.975 35 21V10.5H0L0 21ZM5.25 14H10.5C11.55 14 12.25 14.7 12.25 15.75C12.25 16.8 11.55 17.5 10.5 17.5H5.25C4.2 17.5 3.5 16.8 3.5 15.75C3.5 14.7 4.2 14 5.25 14ZM29.75 0L5.25 0C2.275 0 0 2.275 0 5.25L0 7L35 7V5.25C35 2.275 32.725 0 29.75 0Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_24_container}    >
				<View style = {noneModeStyles._Rectangle_24}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_24_link}}/>
				</View>
			</View>
			<Text style = {noneModeStyles._Training}   >
				Training
			</Text>
			<View style = {noneModeStyles._Rectangle_25_container}    >
				<View style = {noneModeStyles._Rectangle_25}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_25_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___4

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(0, 0, 0)",
	},
_Group_1321: {
	width: 428,
	height: 20,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_56: {
	width: 428,
	height: 20,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_16: {
	width: 428,
	height: 20,
	backgroundColor: "rgb(26, 20, 20)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_bar_chart: {
	width: 20,
	height: 20,
	overflow: "hidden",
	position: "absolute",
	left: 314,
	top: -1,
	},
style5: {
	position: "absolute",
	transform: [
		{translateX: 0.625},
		{translateY: 0.625},
	],
	},
style6: {
	},
_bar_chart_2: {
	width: 20,
	height: 20,
	overflow: "hidden",
	position: "absolute",
	left: 279,
	top: 0,
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 0.625},
		{translateY: 0.625},
	],
	},
style9: {
	},
_Group_1313: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 349,
	top: 0,
	},
_Wifi___24___Outline: {
	width: 22,
	height: 22,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
style12: {
	position: "absolute",
	transform: [
		{translateX: 1.00458},
		{translateY: 2.74371},
	],
	},
style13: {
	},
_battery_charging: {
	width: 22,
	height: 22,
	overflow: "hidden",
	position: "absolute",
	left: 386,
	top: -1,
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 0.6875},
		{translateY: 5.5},
	],
	},
style16: {
	},
_SWM_icons___outline___speaker_2: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 79,
	top: -2,
	},
style18: {
	position: "absolute",
	transform: [
		{translateX: 2.75},
		{translateY: 2.75},
	],
	},
style19: {
	},
_4_05_pm: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 20,
	top: 3,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_17: {
	width: 428,
	height: 125,
	backgroundColor: "rgb(223, 161, 0)",
	position: "absolute",
	left: 0,
	top: 20,
	},
_Come___Fit: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 136,
	top: 61,
	color: "rgb(0, 0, 0)",
	fontSize: 30,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Active_Living: {
	width: 124,
	height: 20,
	position: "absolute",
	left: 160,
	top: 101,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "300",
	lineHeight: 23.4375,
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_19_container: {
	width: 198,
	height: 256,
	position: "absolute",
	left: 222,
	top: 207,
	},
_Rectangle_19: {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	},
_Rectangle_20_container: {
	width: 198,
	height: 256,
	position: "absolute",
	left: 8,
	top: 207,
	},
_Rectangle_20: {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	},
_Rectangle_21_container: {
	width: 198,
	height: 256,
	position: "absolute",
	left: 8,
	top: 566,
	},
_Rectangle_21: {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	},
_Rectangle_22_container: {
	width: 198,
	height: 256,
	position: "absolute",
	left: 222,
	top: 566,
	},
_Rectangle_22: {
	width: "100%",
	height: "100%",
	borderRadius: 12,
	},
_Chest_Training: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 131,
	top: 162,
	color: "rgb(196, 196, 196)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Back_Training: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 131,
	top: 515,
	color: "rgb(196, 196, 196)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Line_3: {
	width: 428.01,
	height: 0,
	position: "absolute",
	left: -0.00524902,
	top: 494.5,
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(196, 196, 196)",
	},
_Rectangle_23: {
	width: 428,
	height: 82,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 844,
	},
_Group_1318: {
	width: 42,
	height: 42,
	position: "absolute",
	left: 357,
	top: 862,
	},
_account___24___Outline: {
	width: 42,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 3.5},
		{translateY: 3.5},
	],
	},
style39: {
	},
_Group_1281: {
	width: 42,
	height: 42,
	position: "absolute",
	left: 255,
	top: 860,
	},
_debit_card_card_atm_card_credit_card__1: {
	width: 42,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 3.5},
		{translateY: 8.74979},
	],
	},
style43: {
	},
_Rectangle_24_container: {
	width: 106.885,
	height: 63.4187,
	position: "absolute",
	left: 7,
	top: 843.301,
	},
_Rectangle_24: {
	width: "100%",
	height: "100%",
	},
_Training: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 24,
	top: 898,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_25_container: {
	width: 100,
	height: 42,
	position: "absolute",
	left: 121,
	top: 862,
	},
_Rectangle_25: {
	width: "100%",
	height: "100%",
	},
})

