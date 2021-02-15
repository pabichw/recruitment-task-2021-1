import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from 'react-final-form';
import { composeValidators, required } from './validators';

const AddAlbumForm = ({onSubmit}) => {
    const { t } = useTranslation();

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
                <form id="add-album-form" onSubmit={handleSubmit} className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <Field name="name" id="name" validate={composeValidators(required)} component="input" />
                            <label for="name">{t('albumsManagement.form.namePlaceholder')}</label>
                        </div>
                    </div>
                    <button className="btn waves-effect waves-light"  type="submit">{t('general.add')}</button>
                </form>
            )}
        />
    );
};

export default AddAlbumForm;