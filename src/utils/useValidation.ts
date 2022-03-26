import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type ValidationData = {
  workerCount: string | null;
  workCount: string | null;
};
type UseValidationProps = {
  data: ValidationData;
  setters: {
    workSetter: (work: string) => any;
    workerSetter: (worker: string) => any;
  };
};

export const validationSchemaTemplate = yup
  .object({
    workerCount: yup
      .number()
      .required('Количество работников должно быть числом')
      .positive('Количество работников должно быть больше нуля')
      .integer('Количество работников должно быть целым числом')
      .label('Работники'),
    workCount: yup
      .number()
      .required('Количество работ должно быть числом')
      .positive('Количество работ должно быть больше нуля')
      .integer('Количество работ должно быть целым числом')
      .label('Работы'),
  })
  .defined();

export const useValidation = (data: UseValidationProps['data'], setters: UseValidationProps['setters']) => {
  const { workerCount, workCount } = data;
  const { workSetter, workerSetter } = setters;
  const {
    formState: { errors },
    control,
    setValue,
    handleSubmit,
  } = useForm<ValidationData>({
    resolver: yupResolver(validationSchemaTemplate),
    defaultValues: {
      workerCount: workerCount ? workerCount.toString() : '0',
      workCount: workCount ? workCount.toString() : '0',
    },
  });

  const onChangeWorkerCount = React.useCallback((value: string) => {
    setValue('workerCount', value);
    workerSetter(value);
  }, []);

  const onChangeWorkCount = React.useCallback((value: string) => {
    setValue('workCount', value);
    workSetter(value);
  }, []);

  return {
    errors: errors,
    control: control,
    handleSubmit: handleSubmit,
    onChangeWorkCount: onChangeWorkCount,
    onChangeWorkerCount: onChangeWorkerCount,
  };
};
