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
import {image_Rectangle_52_link} from './assets/imageLinks.js'
const Page_iPhone_13_Pro_Max___9  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._Rectangle_49}    >
			</View>
			<Text style = {noneModeStyles._4_05_pm}   >
				4:05 pm
			</Text>
			<View style = {noneModeStyles._SWM_icons___outline___speaker_2}    >
				<View style = {noneModeStyles.style4}    >
					<View style = {noneModeStyles.style5}   >
						<Svg style={{height: 18, width: 18}} viewBox = "0 0 18 18">
							<Path fill = {"none"}   stroke = {"white"} strokeWidth = {1.5} d = "M12.6667 6.24999C13.125 6.70832 13.5833 7.62499 13.5833 8.99999C13.5833 10.375 13.125 11.2917 12.6667 11.75M15.4167 3.5C16.7917 4.875 17.25 7.16667 17.25 8.99999C17.25 10.8333 16.7917 13.125 15.4167 14.5M9.91667 0.75L4.41667 5.33333H2.58333C1.57081 5.33333 0.75 6.15414 0.75 7.16667V10.8333C0.75 11.8459 1.57081 12.6667 2.58333 12.6667H4.41667L9.91667 17.25V0.75Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart}    >
				<View style = {noneModeStyles.style7}    >
					<View style = {noneModeStyles.style8}   >
						<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
							<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1.26667 19H18.3667C18.5346 19 18.6957 18.9333 18.8145 18.8145C18.9333 18.6957 19 18.5346 19 18.3667C19 18.1987 18.9333 18.0376 18.8145 17.9188C18.6957 17.8001 18.5346 17.7333 18.3667 17.7333H1.26667V0.633333C1.26667 0.465363 1.19994 0.304272 1.08117 0.185499C0.962395 0.066726 0.801304 0 0.633333 0C0.465363 0 0.304272 0.066726 0.185499 0.185499C0.066726 0.304272 0 0.465363 0 0.633333V17.7333C0 18.0693 0.133452 18.3915 0.370998 18.629C0.608544 18.8665 0.930726 19 1.26667 19ZM3.95833 16.4667H5.54167C5.9196 16.4667 6.28205 16.3165 6.54929 16.0493C6.81653 15.7821 6.96667 15.4196 6.96667 15.0417V9.025C6.96667 8.64707 6.81653 8.28461 6.54929 8.01737C6.28205 7.75013 5.9196 7.6 5.54167 7.6H3.95833C3.5804 7.6 3.21795 7.75013 2.95071 8.01737C2.68347 8.28461 2.53333 8.64707 2.53333 9.025V15.0417C2.53333 15.4196 2.68347 15.7821 2.95071 16.0493C3.21795 16.3165 3.5804 16.4667 3.95833 16.4667ZM11.2417 16.4667H9.65833C9.2804 16.4667 8.91795 16.3165 8.65071 16.0493C8.38347 15.7821 8.23333 15.4196 8.23333 15.0417V7.125C8.23333 6.74707 8.38347 6.38461 8.65071 6.11737C8.91795 5.85013 9.2804 5.7 9.65833 5.7H11.2417C11.6196 5.7 11.9821 5.85013 12.2493 6.11737C12.5165 6.38461 12.6667 6.74707 12.6667 7.125V15.0417C12.6667 15.4196 12.5165 15.7821 12.2493 16.0493C11.9821 16.3165 11.6196 16.4667 11.2417 16.4667ZM15.3441 16.4667H16.9274C17.3054 16.4667 17.6678 16.3165 17.9351 16.0493C18.2023 15.7821 18.3524 15.4196 18.3524 15.0417V4.59167C18.3524 4.21373 18.2023 3.85128 17.9351 3.58404C17.6678 3.3168 17.3054 3.16667 16.9274 3.16667H15.3441C14.9662 3.16667 14.6037 3.3168 14.3365 3.58404C14.0692 3.85128 13.9191 4.21373 13.9191 4.59167V15.0417C13.9191 15.4196 14.0692 15.7821 14.3365 16.0493C14.6037 16.3165 14.9662 16.4667 15.3441 16.4667Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bar_chart_2}    >
				<View style = {noneModeStyles.style10}    >
					<View style = {noneModeStyles.style11}   >
						<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
							<Path fill = {"white"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1.26667 19H18.3667C18.5346 19 18.6957 18.9333 18.8145 18.8145C18.9333 18.6957 19 18.5346 19 18.3667C19 18.1987 18.9333 18.0376 18.8145 17.9188C18.6957 17.8001 18.5346 17.7333 18.3667 17.7333H1.26667V0.633333C1.26667 0.465363 1.19994 0.304272 1.08117 0.185499C0.962395 0.066726 0.801304 0 0.633333 0C0.465363 0 0.304272 0.066726 0.185499 0.185499C0.066726 0.304272 0 0.465363 0 0.633333V17.7333C0 18.0693 0.133452 18.3915 0.370998 18.629C0.608544 18.8665 0.930726 19 1.26667 19ZM3.95833 16.4667H5.54167C5.9196 16.4667 6.28205 16.3165 6.54929 16.0493C6.81653 15.7821 6.96667 15.4196 6.96667 15.0417V9.025C6.96667 8.64707 6.81653 8.28461 6.54929 8.01737C6.28205 7.75013 5.9196 7.6 5.54167 7.6H3.95833C3.5804 7.6 3.21795 7.75013 2.95071 8.01737C2.68347 8.28461 2.53333 8.64707 2.53333 9.025V15.0417C2.53333 15.4196 2.68347 15.7821 2.95071 16.0493C3.21795 16.3165 3.5804 16.4667 3.95833 16.4667ZM11.2417 16.4667H9.65833C9.2804 16.4667 8.91795 16.3165 8.65071 16.0493C8.38347 15.7821 8.23333 15.4196 8.23333 15.0417V7.125C8.23333 6.74707 8.38347 6.38461 8.65071 6.11737C8.91795 5.85013 9.2804 5.7 9.65833 5.7H11.2417C11.6196 5.7 11.9821 5.85013 12.2493 6.11737C12.5165 6.38461 12.6667 6.74707 12.6667 7.125V15.0417C12.6667 15.4196 12.5165 15.7821 12.2493 16.0493C11.9821 16.3165 11.6196 16.4667 11.2417 16.4667ZM15.3441 16.4667H16.9274C17.3054 16.4667 17.6678 16.3165 17.9351 16.0493C18.2023 15.7821 18.3524 15.4196 18.3524 15.0417V4.59167C18.3524 4.21373 18.2023 3.85128 17.9351 3.58404C17.6678 3.3168 17.3054 3.16667 16.9274 3.16667H15.3441C14.9662 3.16667 14.6037 3.3168 14.3365 3.58404C14.0692 3.85128 13.9191 4.21373 13.9191 4.59167V15.0417C13.9191 15.4196 14.0692 15.7821 14.3365 16.0493C14.6037 16.3165 14.9662 16.4667 15.3441 16.4667Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Group_1323}    >
				<View style = {noneModeStyles._Wifi___24___Outline}    >
					<View style = {noneModeStyles.style14}    >
						<View style = {noneModeStyles.style15}   >
							<Svg style={{height: 17, width: 20}} viewBox = "0 0 20 17">
								<Path fill = {"white"}     d = "M9.9992 11.0104C9.4551 11.0104 8.92321 11.1717 8.47081 11.474C8.0184 11.7763 7.66579 12.206 7.45757 12.7087C7.24935 13.2113 7.19487 13.7645 7.30102 14.2981C7.40717 14.8318 7.66918 15.322 8.05392 15.7067C8.43866 16.0915 8.92885 16.3535 9.4625 16.4596C9.99615 16.5658 10.5493 16.5113 11.052 16.3031C11.5547 16.0949 11.9843 15.7422 12.2866 15.2898C12.5889 14.8374 12.7502 14.3055 12.7502 13.7614C12.7502 13.0318 12.4604 12.3321 11.9445 11.8162C11.4286 11.3002 10.7288 11.0104 9.9992 11.0104ZM9.9992 14.6785C9.81783 14.6785 9.64054 14.6247 9.48974 14.5239C9.33893 14.4231 9.2214 14.2799 9.15199 14.1124C9.08259 13.9448 9.06443 13.7604 9.09981 13.5825C9.13519 13.4047 9.22253 13.2413 9.35078 13.113C9.47902 12.9848 9.64242 12.8974 9.8203 12.862C9.99819 12.8267 10.1826 12.8448 10.3501 12.9142C10.5177 12.9836 10.6609 13.1012 10.7617 13.252C10.8624 13.4028 10.9162 13.5801 10.9162 13.7614C10.9162 14.0046 10.8196 14.2379 10.6476 14.4099C10.4757 14.5818 10.2424 14.6785 9.9992 14.6785ZM9.9992 7.34234C8.2979 7.34821 6.66728 8.02351 5.45998 9.22222C5.28919 9.39404 5.19332 9.62645 5.19332 9.86872C5.19332 10.111 5.28919 10.3434 5.45998 10.5152C5.6318 10.686 5.86422 10.7819 6.10648 10.7819C6.34874 10.7819 6.58116 10.686 6.75297 10.5152C7.17889 10.0882 7.68485 9.74945 8.2419 9.5183C8.79894 9.28716 9.39611 9.16817 9.9992 9.16817C10.6023 9.16817 11.1995 9.28716 11.7565 9.5183C12.3136 9.74945 12.8195 10.0882 13.2454 10.5152C13.4147 10.688 13.6455 10.7869 13.8873 10.7903C14.0734 10.801 14.2583 10.7548 14.4174 10.6578C14.5765 10.5608 14.7023 10.4176 14.778 10.2473C14.8537 10.0769 14.8757 9.88763 14.8411 9.7045C14.8065 9.52138 14.7169 9.35315 14.5843 9.22222C13.9809 8.62314 13.2654 8.14878 12.4787 7.82623C11.692 7.50368 10.8495 7.33925 9.9992 7.34234ZM9.9992 3.67429C7.32518 3.68139 4.76175 4.74235 2.86483 6.62707C2.77933 6.71257 2.71151 6.81408 2.66524 6.92579C2.61897 7.0375 2.59515 7.15724 2.59515 7.27815C2.59515 7.52235 2.69216 7.75656 2.86483 7.92923C3.03751 8.10191 3.27171 8.19892 3.51591 8.19892C3.76012 8.19892 3.99432 8.10191 4.16699 7.92923C5.71446 6.38369 7.81212 5.51558 9.9992 5.51558C12.1863 5.51558 14.2839 6.38369 15.8314 7.92923C15.9171 8.01422 16.0187 8.08146 16.1304 8.1271C16.2422 8.17273 16.3618 8.19586 16.4825 8.19517C16.6032 8.19586 16.7228 8.17273 16.8345 8.1271C16.9463 8.08146 17.0479 8.01422 17.1336 7.92923C17.2195 7.84398 17.2877 7.74256 17.3343 7.63081C17.3809 7.51907 17.4048 7.39921 17.4048 7.27815C17.4048 7.1571 17.3809 7.03724 17.3343 6.92549C17.2877 6.81374 17.2195 6.71232 17.1336 6.62707C15.2367 4.74235 12.6732 3.68139 9.9992 3.67429ZM19.7287 4.03192C18.4513 2.7537 16.9346 1.73971 15.2651 1.0479C13.5957 0.356081 11.8063 0 9.9992 0C8.1921 0 6.40271 0.356081 4.73328 1.0479C3.06384 1.73971 1.54709 2.7537 0.269686 4.03192C0.0970089 4.2046 0 4.4388 0 4.683C0 4.92721 0.0970089 5.16141 0.269686 5.33408C0.442363 5.50676 0.676563 5.60377 0.920766 5.60377C1.16497 5.60377 1.39917 5.50676 1.57185 5.33408C3.80732 3.09977 6.83858 1.84464 9.9992 1.84464C13.1598 1.84464 16.1911 3.09977 18.4266 5.33408C18.5118 5.42003 18.6132 5.48825 18.725 5.53481C18.8367 5.58137 18.9566 5.60533 19.0776 5.60533C19.1987 5.60533 19.3186 5.58137 19.4303 5.53481C19.542 5.48825 19.6435 5.42003 19.7287 5.33408C19.8147 5.24884 19.8829 5.14741 19.9294 5.03567C19.976 4.92392 20 4.80406 20 4.683C20 4.56195 19.976 4.44209 19.9294 4.33034C19.8829 4.21859 19.8147 4.11717 19.7287 4.03192Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._battery_charging}    >
				<View style = {noneModeStyles.style17}    >
					<View style = {noneModeStyles.style18}   >
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
			<View style = {noneModeStyles._Rectangle_40}    >
			</View>
			<Text style = {noneModeStyles._Add_workout_Plan}   >
				Add workout Plan
			</Text>
			<View style = {noneModeStyles._SWM_icons___outline___arrow_left}    >
				<View style = {noneModeStyles.style22}    >
					<View style = {noneModeStyles.style23}   >
						<Svg style={{height: 17, width: 22}} viewBox = "0 0 22 17">
							<Path fill = {"none"}   stroke = {"#E5E5E5"} strokeWidth = {1.5} d = "M0.767442 8.44186L21.2326 8.44186M0.767442 8.44186L8.44186 0.767442M0.767442 8.44186L8.44186 16.1163"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Ellipse_1}    >
			</View>
			<Text style = {noneModeStyles._Come___Fit}   >
				Come {'\n'}   &{'\n'}  Fit
			</Text>
			<View style = {noneModeStyles._Rectangle_50}    >
			</View>
			<Text style = {noneModeStyles._Training_route}   >
				Training route
			</Text>
			<View style = {noneModeStyles._Rectangle_54}    >
			</View>
			<View style = {noneModeStyles._Rectangle_51}    >
			</View>
			<Text style = {noneModeStyles._Select_a_Day}   >
				Select a Day
			</Text>
			<View style = {noneModeStyles._Rectangle_52_container}    >
				<View style = {noneModeStyles._Rectangle_52}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_52_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_53}    >
			</View>
			<Text style = {noneModeStyles._Monday}   >
				Monday
			</Text>
			<Text style = {noneModeStyles._Tuesday}   >
				Tuesday
			</Text>
			<Text style = {noneModeStyles._Wednesday}   >
				Wednesday
			</Text>
			<Text style = {noneModeStyles._Thursday}   >
				Thursday
			</Text>
			<Text style = {noneModeStyles._Friday}   >
				Friday
			</Text>
			<Text style = {noneModeStyles._Saturday}   >
				Saturday
			</Text>
			<Text style = {noneModeStyles._Sunday}   >
				Sunday
			</Text>
			<View style = {noneModeStyles._SWM_icons___outline___chevron_down_small}    >
				<View style = {noneModeStyles.style42}    >
					<View style = {noneModeStyles.style43}   >
						<Svg style={{height: 7, width: 12}} viewBox = "0 0 12 7">
							<Path fill = {"none"}   stroke = {"black"} strokeWidth = {1.5} d = "M0.782609 0.782609L6 6L11.2174 0.782609"/>
						</Svg>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._OK}   >
				OK
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_iPhone_13_Pro_Max___9

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Rectangle_49: {
	width: 428,
	height: 20,
	backgroundColor: "rgb(26, 20, 20)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_4_05_pm: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 13,
	top: 3,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_SWM_icons___outline___speaker_2: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 74,
	top: -1,
	},
style4: {
	position: "absolute",
	transform: [
		{translateX: 2.75},
		{translateY: 2.75},
	],
	},
style5: {
	},
_bar_chart: {
	width: 20,
	height: 20,
	overflow: "hidden",
	position: "absolute",
	left: 260,
	top: -3,
	},
style7: {
	position: "absolute",
	transform: [
		{translateX: 0.625},
		{translateY: 0.625},
	],
	},
style8: {
	},
_bar_chart_2: {
	width: 20,
	height: 20,
	overflow: "hidden",
	position: "absolute",
	left: 302,
	top: -1,
	},
style10: {
	position: "absolute",
	transform: [
		{translateX: 0.625},
		{translateY: 0.625},
	],
	},
style11: {
	},
_Group_1323: {
	width: 22,
	height: 22,
	position: "absolute",
	left: 344,
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
style14: {
	position: "absolute",
	transform: [
		{translateX: 1.00464},
		{translateY: 2.74371},
	],
	},
style15: {
	},
_battery_charging: {
	width: 22,
	height: 22,
	overflow: "hidden",
	position: "absolute",
	left: 388,
	top: -1,
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 0.6875},
		{translateY: 5.5},
	],
	},
style18: {
	},
_Rectangle_40: {
	width: 428,
	height: 73,
	backgroundColor: "rgb(4, 13, 48)",
	position: "absolute",
	left: 0,
	top: 20,
	},
_Add_workout_Plan: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 84,
	top: 38,
	color: "rgb(229, 229, 229)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_SWM_icons___outline___arrow_left: {
	width: 30,
	height: 30,
	position: "absolute",
	left: 27,
	top: 41,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 5},
		{translateY: 7.5},
	],
	},
style23: {
	},
_Ellipse_1: {
	width: 117,
	height: 128,
	position: "absolute",
	left: 161,
	top: 161,
	borderTopWidth: 4,
	borderRightWidth: 4,
	borderBottomWidth: 4,
	borderLeftWidth: 4,
	borderStyle: "solid",
	borderColor: "rgb(26, 20, 20)",
	},
_Come___Fit: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 189,
	top: 187,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_50: {
	width: 428,
	height: 586,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 340,
	},
_Training_route: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 18,
	top: 359,
	color: "rgb(229, 229, 229)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_54: {
	width: 428,
	height: 906,
	backgroundColor: "rgba(0, 0, 0, 0.51)",
	position: "absolute",
	left: 0,
	top: 20,
	},
_Rectangle_51: {
	width: 340,
	height: 184,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 44,
	top: 411,
	},
_Select_a_Day: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 105,
	top: 426,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Rectangle_52_container: {
	width: 40,
	height: 36,
	position: "absolute",
	left: 56,
	top: 422,
	},
_Rectangle_52: {
	width: "100%",
	height: "100%",
	},
_Rectangle_53: {
	width: 182,
	height: 357,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 105,
	top: 493,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(0, 0, 0)",
	},
_Monday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 517,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Tuesday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 566,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Wednesday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 615,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Thursday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 664,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Friday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 713,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Saturday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 762,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_Sunday: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 124,
	top: 811,
	color: "rgb(0, 0, 0)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
_SWM_icons___outline___chevron_down_small: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 330,
	top: 503,
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 7},
		{translateY: 10},
	],
	},
style43: {
	},
_OK: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 320,
	top: 560,
	color: "rgb(196, 18, 50)",
	fontSize: 25,
	fontWeight: "500",
	fontFamily: "Roboto",
	textAlign: "left",
	},
})

