import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

/* testy dla komponentu głównego (OrderOption); testy subkomponentów poniżej */
describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='dropdown' name='nazwa_komponentu' />);
    expect(component).toBeTruthy();
    // console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct title', () => {
    const compTitle = 'Lorem ipsum';
    const component = shallow(<OrderOption type='dropdown' name={compTitle} />);
    expect(component.find('h3.title').text()).toEqual(compTitle);
  });
});

/*testy dla subkomponentów*/
// pętla, która pomoże nam testować każdy z subkomponentów znajdujących się w OrderOption
const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

// obiekt zawierający wiele propsów, które chcemy nadawać subkomponentom
// wykorzystywane do mockowania: mockProps, mockPropsForType, testValue, testValueNumber
const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
      // console.log(component.debug());
      // console.log(subcomponent.debug());
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'icons': {
        it('contains div with class icon', () =>{
          const divIcons = renderedSubcomponent.find('.icon').not('[value=""]');
          expect(divIcons.length).toBe(mockProps.values.length);

          const activeIcons = renderedSubcomponent.find('.iconActive');
          expect(activeIcons.length).toBe(1);

          const emptyIcons = renderedSubcomponent.find('div[value=""]');
          expect(emptyIcons.length).toBe(1);
          // console.log(divIcons.debug());
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('.icon:last-child').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'checkboxes': {
        it('contains div with class checkboxes', () =>{
          const divCheckboxes = renderedSubcomponent.find('.checkboxes');
          expect(divCheckboxes).toBeTruthy();
          // console.log(divCheckboxes.debug());
        });

        it('contains inputs type of checkboxes', () =>{
          const inputsCheckboxes = renderedSubcomponent.find('input[type="checkbox"]');
          expect(inputsCheckboxes.length).toBe(mockProps.values.length);
          // console.log(inputsCheckboxes.debug());
        });

        it('should run setOrderOption function on change', () =>{
          renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({[mockProps.id]: [mockProps.currentValue, testValue]});
        });
        break;
      }

      case 'number': {
        it('contains div with class number and input', () =>{
          const divNumber= renderedSubcomponent.find('.number');
          expect(divNumber).toBeTruthy();

          const inputNumber = renderedSubcomponent.find('input[type="number"]');
          expect(inputNumber.length).toBe(1);
          expect(inputNumber.prop('value')).toBe(mockPropsForType.number.currentValue);
          // console.log(inputNumber.debug());
        });

        it('contains input with min and max limits', () => {
          const inputNumber = renderedSubcomponent.find('input[type="number"]');
          expect(inputNumber.prop('min')).toBe(mockProps.limits.min);
          expect(inputNumber.prop('max')).toBe(mockProps.limits.max);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input[type="number"]').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      case 'text': {
        it('contains input with class text', () => {
          const inputText = renderedSubcomponent.find('input[type="text"]');
          expect(inputText.length).toBe(1);
          expect(inputText.prop('value')).toBe(mockProps.currentValue);
          // console.log(inputText.debug());
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input[type="text"]').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'date': {
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
    }
  });
}
