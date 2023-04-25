/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendRequestCreateFormInputValues = {
    status?: string;
};
export declare type FriendRequestCreateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendRequestCreateFormOverridesProps = {
    FriendRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FriendRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: FriendRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FriendRequestCreateFormInputValues) => FriendRequestCreateFormInputValues;
    onSuccess?: (fields: FriendRequestCreateFormInputValues) => void;
    onError?: (fields: FriendRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendRequestCreateFormInputValues) => FriendRequestCreateFormInputValues;
    onValidate?: FriendRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function FriendRequestCreateForm(props: FriendRequestCreateFormProps): React.ReactElement;
