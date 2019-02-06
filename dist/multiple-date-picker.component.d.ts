import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as moment from 'moment/moment';
export declare class MultipleDatePickerComponent implements OnInit, ControlValueAccessor {
    calendarMoment: moment.Moment;
    highlightDays: Array<any>;
    dayClick: any;
    dayHover: string;
    rightClick: string;
    monthChanged: any;
    fontAwesome: boolean;
    matIcons: boolean;
    monthClick: string;
    weekDaysOff: Array<number>;
    allDaysOff: string;
    daysAllowed: any;
    disableNavigation: boolean;
    disallowBackPastMonths: boolean;
    disallowGoFuturMonths: string;
    showDaysOfSurroundingMonths: boolean;
    cssDaysOfSurroundingMonths: any;
    fireEventsForDaysOfSurroundingMonths: string;
    disableDaysBefore: any;
    disableDaysAfter: any;
    changeYearPast: string;
    changeYearFuture: string;
    arrow: number;
    monthAdjustment: any;
    month: moment.Moment;
    projectScope: Array<any>;
    days: Array<any>;
    daysOff: any;
    disableBackButton: any;
    disableNextButton: any;
    daysOfWeek: Array<any>;
    yearsForSelect: any;
    monthToDisplay: string;
    yearToDisplay: string;
    sundayFirstDay: boolean;
    constructor();
    ngOnInit(): void;
    arrowSelected(): 1 | 2;
    writeValue(value: any[]): void;
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    _projectScope: any[];
    projectScope2: any[];
    checkNavigationButtons(): void;
    getDaysOfWeek(): any[];
    getMonthYearToDisplay(): string;
    getYearsForSelect(): any[];
    toggleDay(event: any, day: any): void;
    clearDays(): void;
    runGenerate(): void;
    rightClicked(event: any, day: any): void;
    getDayClasses(day: any): string;
    changeMonth(event: any, disable: any, add: any): void;
    changeYear(year: any): void;
    isDayOff(day: any): string | boolean;
    isSelected(day: any): boolean;
    generate(): void;
    findArrayofDays(): void;
}
