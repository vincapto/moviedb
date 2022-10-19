import style from './Form.module.scss';
import React, { ChangeEventHandler, Component, Ref, RefObject, useState } from 'react';
import { checkForm, IForm, IFields } from './util';
import { SubmitHandler, useForm, UseFormReturn } from 'react-hook-form';

type KeysField = keyof IFields;
type errors = { error: boolean };

function Form() {
  const [disabled, setDisabled] = useState(true);
  const [cardList, setCardList] = useState([{}]);

  const createCard = (fields: Record<string, string>) => {
    return (
      <div>
        <div>{fields.name}</div>
        <div>{fields.lastName}</div>
        <div>{fields.address}</div>
        <div>{fields.sex}</div>
        <div>{fields.optionSelect}</div>
      </div>
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  type FieldValues = Record<string, string>;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setCardList((state) => [...state, data]);
  };
  return (
    <>
      <div className={style.formContainer}>
        <h1 className={style.title}>Form</h1>
        <form
          className={style.form}
          onChange={() => {
            setDisabled(false);
          }}
          onSubmit={handleSubmit(onSubmit)}
          action=""
        >
          <div className={style.inputSibling}>
            <div className={style.formItem}>
              <input
                {...register('name', { required: true, maxLength: 20 })}
                placeholder="name"
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name?.type === 'required' && (
                <p className={style.error} role="alert">
                  First name is required
                </p>
              )}
            </div>
            <div className={style.formItem}>
              <input
                {...register('lastName', { required: true, maxLength: 20 })}
                placeholder="last name"
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
              {errors.lastName?.type === 'required' && (
                <p className={style.error} role="alert">
                  First name is required
                </p>
              )}
            </div>
          </div>
          <div className={style.inputSibling}>
            <div className={style.formItem}>
              <input
                {...register('address', { required: true, minLength: 5 })}
                placeholder="name"
                aria-invalid={errors.address ? 'true' : 'false'}
              />
              {errors.address?.type === 'required' && (
                <p className={style.error} role="alert">
                  Field is required
                </p>
              )}
            </div>
            <div className={style.formItem}>
              <input
                {...register('zipCode', { required: true, minLength: 5 })}
                placeholder="zipcode"
                aria-invalid={errors.zipCode ? 'true' : 'false'}
              />
              {errors.zipCode?.type === 'required' && (
                <p className={style.error} role="alert">
                  Field is required
                </p>
              )}
            </div>
          </div>
          <div className={style.inputSibling}>
            <div className={style.formItem}>
              <label htmlFor="male">
                Male
                <input
                  {...register('sex', { required: true })}
                  id="male"
                  placeholder="asd"
                  type="radio"
                  value="male"
                  name="sex"
                />
              </label>
            </div>
            <div className={style.formItem}>
              <label htmlFor="male">
                Female
                <input
                  {...register('sex')}
                  id="female"
                  placeholder="asd"
                  type="radio"
                  value="female"
                  name="sex"
                />
              </label>
            </div>
            {errors.sex?.type === 'required' && (
              <p className={style.error} role="alert">
                Field is required
              </p>
            )}
          </div>
          <select {...register('option')} name="optionSelect">
            <option value="one">one</option>
            <option value="two">two</option>
            <option value="three">three</option>
          </select>
          <div className={style.formItem}>
            <label htmlFor="agree">
              Agree
              <input
                {...register('agree', { required: true })}
                id="agree"
                name="agree"
                type="checkbox"
              />
            </label>
            {errors.agree?.type === 'required' && (
              <p className={style.error} role="alert">
                Field is required
              </p>
            )}
          </div>
          <input
            type="submit"
            className={style.submit}
            onClick={() => {
              Object.keys(errors).length !== 0 ? setDisabled(true) : setDisabled(false);
            }}
            disabled={disabled}
          />
        </form>
        <div className={style.formGrid}>{cardList.map((item) => createCard(item))}</div>
      </div>
    </>
  );
}

export default Form;
