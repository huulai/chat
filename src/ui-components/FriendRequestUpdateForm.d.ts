/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FriendRequest } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendRequestUpdateFormInputValues = {
    status?: string;
};
export declare type FriendRequestUpdateFormValidationValues = {
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendRequestUpdateFormOverridesProps = {
    FriendRequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type FriendRequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: FriendRequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    friendRequest?: FriendRequest;
    onSubmit?: (fields: FriendRequestUpdateFormInputValues) => FriendRequestUpdateFormInputValues;
    onSuccess?: (fields: FriendRequestUpdateFormInputValues) => void;
    onError?: (fields: FriendRequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendRequestUpdateFormInputValues) => FriendRequestUpdateFormInputValues;
    onValidate?: FriendRequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FriendRequestUpdateForm(props: FriendRequestUpdateFormProps): React.ReactElement;
