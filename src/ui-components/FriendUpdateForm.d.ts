/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Friend } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendUpdateFormInputValues = {};
export declare type FriendUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendUpdateFormOverridesProps = {
    FriendUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type FriendUpdateFormProps = React.PropsWithChildren<{
    overrides?: FriendUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    friend?: Friend;
    onSubmit?: (fields: FriendUpdateFormInputValues) => FriendUpdateFormInputValues;
    onSuccess?: (fields: FriendUpdateFormInputValues) => void;
    onError?: (fields: FriendUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendUpdateFormInputValues) => FriendUpdateFormInputValues;
    onValidate?: FriendUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FriendUpdateForm(props: FriendUpdateFormProps): React.ReactElement;
