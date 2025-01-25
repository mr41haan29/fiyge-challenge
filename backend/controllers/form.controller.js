import Form from "../models/form.model.js";

export const saveForm = async (req, res) => {
  try {
    const { form_name, form_data } = req.body;
    const userId = req.user._id;

    // TODO: server side form validation

    const newForm = new Form({
      userId: userId,
      form_name: form_name,
      form_data: form_data,
    });

    await newForm.save();
    res.status(201).json({
      _id: newForm._id,
      form_name: newForm.form_name,
      form_data: newForm.form_data,
    });
  } catch (error) {
    console.log("Error in saveForm controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateForm = async (req, res) => {
  try {
    const formId = req.params.id;
    const userId = req.user._id;

    // TODO: server side form validation

    const form = await Form.findById(formId);

    if (!form) {
      return res.status(400).json({ error: "Form not found" });
    }

    if (form.userId.toString() !== userId.toString()) {
      return res.status(400).json({ error: "Unauthorized to edit" });
    }

    const updatedForm = await Form.findByIdAndUpdate(formId, req.body, {
      new: true,
    });

    res.status(200).json(updatedForm);
  } catch (error) {
    console.log("Error in updateForm controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const listForms = async (req, res) => {
  try {
    const userId = req.user._id;
    const forms = await Form.find({ userId: userId });

    res.status(200).send(forms);
  } catch (error) {
    console.log("Error in listForms controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getForm = async (req, res) => {
  try {
    const formId = req.params.id;
    const form = await Form.findById(formId);

    if (!form) {
      return res.status(400).json({ error: "Form not found" });
    }

    res.status(200).json(form);
  } catch (error) {
    console.log("Error in getForm controller: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// TODO: delete form maybe?
